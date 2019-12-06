import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { ITodo } from '@app/todos/interfaces/ITodo';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
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
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.todos$.subscribe(todos => this.todos = todos);

    this.subscription = combineLatest([
      this.todosService.filterMode$,
      this.todosService.todos$,
    ])
    .subscribe(state => {
      this.filterMode = state[0];

      const allTodos = state[1];

      switch(this.filterMode) {
        case 'Active':
          this.todos = allTodos.filter(todo => !todo.completed);
          break;

        case 'Completed':
          this.todos = allTodos.filter(todo => todo.completed);
          break;

        default:
          this.todos = allTodos;
      }

      this.noMatches = this.filterMode !== 'All' && this.todos.length === 0;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTodoCompleted(index: number): void {
    this.todosService.toggleComplete(index);
  }

}
