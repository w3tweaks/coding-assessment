import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';
import * as TodosState from './todos.state';
import { todosMapping, updateTodoStatusMapping, clearCompletedTodos, removeTodo, updateTodoTextMapping } from './todos.reducer.data-mapping';

export function todosReducer(state: TodosState.TodosState, action: Action) {
  return createReducer(
    TodosState.initialState,
    on(TodoActions.addTodo, (existingState, { text }) => ({
      ...existingState,
      todoList: todosMapping(existingState.todoList, text),
    })),
    on(TodoActions.removeTodo, (existingState, { index }) => {
      return {
        ...existingState,
        todoList: removeTodo(existingState.todoList, index),
      };
    }),
    on(TodoActions.changeFilterMode, (existingState, { mode }) => ({
      ...existingState,
      filterMode: mode,
    })),
    on(TodoActions.clearCompleted, (existingState) => ({
      ...existingState,
      todoList: clearCompletedTodos(existingState.todoList),
    })),
    on(TodoActions.updateTodoStatus, (existingState, { index, completed }) => ({
      ...existingState,
      todoList: updateTodoStatusMapping(existingState.todoList, index, completed),
    })),
    on(TodoActions.updateTodoText, (existingState, { index, text }) => ({
      ...existingState,
      todoList: updateTodoTextMapping(existingState.todoList, index, text),
    }))
  )(state, action);
}

export const filterMode = (state: TodosState.TodosState) => state.filterMode;
export const todos = (state: TodosState.TodosState) => state.todoList;
