import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{ text: string }>()
);

export const removeTodo = createAction(
  '[Todos] Remove Todo',
  props<{ index: number }>()
);

export const editTodo = createAction(
  '[Todos] Edit Todo',
  props<{ index: number }>()
);

export const updateTodoStatus = createAction(
  '[Todos] Update Todo Status',
  props<{ index: number, completed: boolean }>()
);

export const toggleCompleted = createAction(
  '[Todos] Toggle Completed',
  props<{ index: number }>()
);

export const toggleAllCompleted = createAction(
  '[Todos] Toggle All Completed',
    props<{checked: boolean}>()
);

export const clearCompleted = createAction(
  '[Todos] Clear Completed'
);

export const updateTodoText = createAction(
  '[Todos] Update Todo Text',
  props<{ index: number, text: string }>()
);
