import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { ITodo } from '@app/todos/interfaces/ITodo';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent implements OnInit, OnDestroy {

  filterMode: FILTER_MODES;
  noMatches: boolean;
  subscription: Subscription;
  todos: ITodo[];

  constructor (
    private changeDetectorRef: ChangeDetectorRef,
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = combineLatest([
      this.todosService.filterMode$,
      this.todosService.todos$,
      this.todosService.todosExist$,
    ])
    .subscribe(state => {
      this.filterMode = state[0];
      this.todos = state[1];
      const todosExist = state[2] !== null && state[2];
      this.noMatches = this.filterMode !== 'All' && todosExist && this.todos.length === 0;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTodoCompleted(index: number): void {
    this.todosService.toggleComplete(index);
  }

  onRemoveTodo(index: number): void {
    this.todosService.removeTodo(index);
  }

}
