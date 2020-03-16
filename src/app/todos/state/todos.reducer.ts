import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { ITodo } from '../interfaces/ITodo';
import * as TodosState from './todos.state';
import { todosMapping, updateTodoStatusMapping, clearCompletedTodos, removeTodo, updateTodoTextMapping, toggleAllCompletedMapping } from './todos.reducer.data-mapping';

export function todosReducer(state: TodosState.TodosState, action: Action) {
  return createReducer(
    TodosState.initialState,
    on(TodoActions.addTodo, (existingState, { text }) => ({
      ...existingState,
      todoList: todosMapping(existingState.todoList, text)
    })),
    on(TodoActions.removeTodo, (existingState, { index }) => {
      return {
        ...existingState,
        todoList: removeTodo(existingState.todoList, index)
      };
    }),
    on(TodoActions.clearCompleted, (existingState) => ({
      ...existingState,
      todoList: clearCompletedTodos(existingState.todoList)
    })),
    on(TodoActions.updateTodoStatus, (existingState, { index, completed }) => ({
      ...existingState,
      todoList: updateTodoStatusMapping(existingState.todoList, index, completed)
    })),
    on(TodoActions.updateTodoText, (existingState, { index, text }) => ({
      ...existingState,
      todoList: updateTodoTextMapping(existingState.todoList, index, text)
    })),
    on(TodoActions.toggleAllCompleted, (existingState, {checked}) => ({
      ...existingState,
      todoList: toggleAllCompletedMapping(existingState.todoList, checked)
    }))
  )(state, action);
}
