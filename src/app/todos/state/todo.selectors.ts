import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const todosSelector = createFeatureSelector<TodosState>('todos');

export const allTodos = createSelector(
  todosSelector,
  state => state.todoList
);
