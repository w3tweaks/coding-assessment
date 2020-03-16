import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ITodo } from '../interfaces';
import { TodosState } from '../state/todos.state';
import * as TodoActions from '../state/todo.actions';
import * as todoSelectors from '../state/todo.selectors';

@Injectable()
export class TodosService {

  allTodos$: Observable<ITodo[]>;

  constructor(
    private store: Store<TodosState>,
  ) {
    this.allTodos$ = this.store.select(todoSelectors.allTodos);
  }

  addTodo(text: string): void {
    this.store.dispatch(TodoActions.addTodo({ text }));
  }

  removeTodo(index: number): void {
    this.store.dispatch(TodoActions.removeTodo({ index }));
  }

  toggleComplete(index: number): void {
    this.store.dispatch(TodoActions.toggleCompleted({ index }));
  }

  toggleAllCompleted(checked: boolean): void {
    this.store.dispatch(TodoActions.toggleAllCompleted({checked}));
  }

  updateTodoStatus(index: number, completed: boolean): void {
    this.store.dispatch(TodoActions.updateTodoStatus({ index, completed }));
  }

  updateTodoText(index: number, text: string): void {
    this.store.dispatch(TodoActions.updateTodoText({ index, text }));
  }

  clearCompleted(): void {
    this.store.dispatch(TodoActions.clearCompleted());
  }
}
