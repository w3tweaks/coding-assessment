import { initialState, ITodosState, todosReducer } from './todos.reducer';
import { ITodo } from './../interfaces';
import * as TodoActions from './todo.actions';

import { clone } from '@app/lib/utils';

describe('Todos Reducer', () => {
  let state: ITodosState;

  beforeEach(() => {
    state = clone(initialState);
    expect(state).toEqual(initialState);
  });

  afterEach(() => {
    state = clone(initialState);
    expect(state).toEqual(initialState);
  });

  describe('Add Todo', () => {
    it('Should add a new Todo', () => {
      const todo: ITodo = {
        text: 'New todo',
        complete: false,
      };

      const newState = todosReducer(state, TodoActions.addTodo({ todo }));
      expect(newState.todos).toEqual([todo]);
    });
  });

  describe('Remove Todo', () => {
    it('should remove a Todo', () => {
      const todo1: ITodo = {
        text: 'Todo 1',
        complete: false,
      };

      const todo2: ITodo = {
        text: 'Todo 2',
        complete: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));
      newState = todosReducer(newState, TodoActions.removeTodo({ index: 0 }));
      expect(newState.todos).toEqual([todo2]);
    });
  });

  describe('Toggle Todo complete', () => {
    it('should toggle a todo as complete or not complete', () => {
      const todo: ITodo = {
        text: 'New todo',
        complete: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ todo }));
      newState = todosReducer(newState, TodoActions.toggleComplete({ index: 0 }));
      expect(newState.todos[0].complete).toEqual(true);

      newState = todosReducer(newState, TodoActions.toggleComplete({ index: 0 }));
      expect(newState.todos[0].complete).toEqual(false);
    });
  });

  describe('Update Todo', () => {
    it('should update the `text` of a todo', () => {
      const todo1: ITodo = {
        text: 'Todo 1',
        complete: false,
      };

      const todo2: ITodo = {
        text: 'Todo 2',
        complete: false,
      };

      const todo3: ITodo = {
        text: 'Todo 3',
        complete: false,
      };

      let newState: ITodosState;
      newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo3 }));
      newState = todosReducer(newState, TodoActions.updateTodo({ index: 1, text: 'Updated' }));
      expect(newState.todos[1].text).toEqual('Updated');
    });
  });
});
