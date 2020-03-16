import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';
import { Store } from '@ngrx/store';
import * as fromTodoStore from '@app/todos/state';
import { map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-complete-all',
  styleUrls: [
    './complete-all.component.scss',
  ],
  templateUrl: './complete-all.component.html',
})
export class CompleteAllComponent implements OnInit {

  multipleTodosExist = false;
  subscription: Subscription;
  completeAll$: Observable<object>;

  constructor (
    private changeDetectorRef: ChangeDetectorRef,
    private todosService: TodosService,
    public todoStore: Store<fromTodoStore.TodosState>
  ) {
  }

  ngOnInit(): void {
    this.completeAll$ = this.todoStore.select(fromTodoStore.allTodos).pipe(map((todos) => {
      // filter the todos complete and return the boolen and length to make the toggle button checked/unchecked
      let todoList = todos.filter(todo => (todo.completed === false)).length;
      return {listLength: todos.length, checkFlag: !todoList};
    }));
  }

  toggleCompleteAll(event): void {
    this.todosService.toggleAllCompleted(event.target.checked);
  }
}
