import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todosState from './todos.reducer';

export const todosSelector = createFeatureSelector<todosState.ITodosState>('todos');

export const filterMode = createSelector(
  todosSelector,
  todosState.filterMode,
);

export const allTodos = createSelector(
  todosSelector,
  todosState.todos,
);

export const todos = createSelector(
  filterMode,
  allTodos,
  (mode, todoObjects) => {
    let filteredTodos;

    switch (mode) {
      case 'Active':
        filteredTodos = todoObjects.filter(todo => !todo.completed);
        break;

      case 'Completed':
        filteredTodos = todoObjects.filter(todo => todo.completed);
        break;

      default:
        filteredTodos = todoObjects;

      }

    return filteredTodos;
  }
);
