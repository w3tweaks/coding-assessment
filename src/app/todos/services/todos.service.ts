import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ITodo } from '../interfaces';
import { ITodosState } from '../state/todos.reducer';
import * as TodoActions from '../state/todo.actions';
import * as todoSelectors from '../state/todo.selectors';

@Injectable()
export class TodosService {

  todos$: Observable<ITodo[]>;

  constructor(
    private store: Store<ITodosState>,
  ) {
    this.todos$ = this.store.select(todoSelectors.todos);
  }

  addTodo(todo: ITodo): void {
    this.store.dispatch(TodoActions.addTodo({ todo }));
  }

  removeTodo(index: number): void {
    this.store.dispatch(TodoActions.removeTodo({ index }));
  }

  toggleComplete(index: number): void {
    this.store.dispatch(TodoActions.toggleCompleted({ index }));
  }

  updateTodo(index: number, text: string): void {
    this.store.dispatch(TodoActions.updateTodo({ index, text }));
  }

}
