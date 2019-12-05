import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interfaces';

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: ITodo }>(),
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ index: number }>(),
);

export const updateTodo = createAction(
  '[Todos] Update Todo',
  props<{ index: number, text: string }>(),
);

export const toggleComplete = createAction(
  '[Todos] Toggle Complete',
  props<{ index: number }>(),
);
