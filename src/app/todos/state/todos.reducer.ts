import { Action, createReducer, on, State } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';

export interface ITodosState {
  filterMode?: FILTER_MODES;
  todos?: ITodo[];
}

export const initialState: ITodosState = {
  filterMode: 'All',
  todos: [],
};

export function todosReducer(state: ITodosState, action: Action) {
  return createReducer(
    initialState,
    on(TodoActions.addTodo, (existingState, { todo }) => ({
      ...existingState,
      todos: [todo, ...existingState.todos],
    })),
    on(TodoActions.removeTodo, (existingState, { index }) => ({
      ...existingState,
      todos: existingState.todos.splice(index, 1),
    })),
    on(TodoActions.toggleCompleted, (existingState, { index }) => {
      const todo = {...existingState.todos[index]};
      todo.completed = !todo.completed;

      return Object.assign({}, existingState, {
        todos: [...existingState.todos.slice(0, index), todo, ...existingState.todos.slice(index + 1)],
      } as ITodosState);
    }),
    on(TodoActions.updateTodo, (existingState, { index, text }) => {
      const todo = existingState.todos[index];
      todo.text = text;

      return Object.assign({}, existingState, {
        todos: [...existingState.todos.slice(0, index), todo, ...existingState.todos.slice(index + 1)],
      } as ITodosState);
    }),
    on(TodoActions.filterTodos, (existingState, { filterMode }) => ({
      ...existingState,
      filterMode,
    })),
    on(TodoActions.toggleAllCompleted, (existingState) => ({
      ...existingState,
      todos: [...existingState.todos.map(todo => {
        const updatedTodo = {...todo};
        updatedTodo.completed = !updatedTodo.completed;
        return updatedTodo;
      })]
    })),
  )(state, action);
}

export const todos = (state: ITodosState) => state.todos;
export const filterMode = (state: ITodosState) => state.filterMode;
