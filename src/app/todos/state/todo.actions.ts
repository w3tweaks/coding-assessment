import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interfaces';
import { FILTER_MODES } from '../constants/filter-modes';

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

export const toggleCompleted = createAction(
  '[Todos] Toggle Completed',
  props<{ index: number }>(),
);

export const filterTodos = createAction(
  '[Todos] Filter Todos',
  props<{ filterMode: FILTER_MODES }>(),
);
