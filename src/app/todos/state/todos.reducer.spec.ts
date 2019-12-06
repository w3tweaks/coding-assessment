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
        completed: false,
      };

      const newState = todosReducer(state, TodoActions.addTodo({ todo }));
      expect(newState.todos).toEqual([todo]);
    });
  });

  describe('Remove Todo', () => {
    it('should remove a Todo', () => {
      const todo1: ITodo = {
        text: 'Todo 1',
        completed: false,
      };

      const todo2: ITodo = {
        text: 'Todo 2',
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));
      newState = todosReducer(newState, TodoActions.removeTodo({ index: 0 }));
      expect(newState.todos).toEqual([todo1]);
    });
  });

  describe('Toggle Todo completed', () => {
    it('should toggle a todo as completed or not completed', () => {
      const todo: ITodo = {
        text: 'New todo',
        completed: false,
      };

      let newState: ITodosState;

      newState = todosReducer(state, TodoActions.addTodo({ todo }));
      newState = todosReducer(newState, TodoActions.toggleCompleted({ index: 0 }));
      expect(newState.todos[0].completed).toEqual(true);

      newState = todosReducer(newState, TodoActions.toggleCompleted({ index: 0 }));
      expect(newState.todos[0].completed).toEqual(false);
    });
  });

  describe('Update Todo', () => {
    it('should update the `text` of a todo', () => {
      const todo1: ITodo = {
        text: 'Todo 1',
        completed: false,
      };

      const todo2: ITodo = {
        text: 'Todo 2',
        completed: false,
      };

      const todo3: ITodo = {
        text: 'Todo 3',
        completed: false,
      };

      let newState: ITodosState;
      newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo3 }));
      newState = todosReducer(newState, TodoActions.updateTodo({ index: 1, text: 'Updated' }));
      expect(newState.todos[1].text).toEqual('Updated');
    });
  });

  describe('Toggle All Completed', () => {
    const todo1: ITodo = {
      text: 'Todo 1',
      completed: false,
    };

    const todo2: ITodo = {
      text: 'Todo 2',
      completed: false,
    };

    let newState: ITodosState;
    newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
    newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));

    it('should set all `Active` todos as `Completed`', () => {
      newState = todosReducer(newState, TodoActions.toggleAllCompleted());
      expect(newState.todos[0].completed).toBeTrue();
      expect(newState.todos[1].completed).toBeTrue();
    });

    it('should set all `Completed` todos as `Active`', () => {
      newState = todosReducer(newState, TodoActions.toggleAllCompleted());
      expect(newState.todos[0].completed).toBeFalse();
      expect(newState.todos[1].completed).toBeFalse();
    });
  });

  describe('Clear Completed', () => {
    it('should clear all `Completed` todos', () => {
      const todo1: ITodo = {
        text: 'Todo 1',
        completed: false,
      };

      const todo2: ITodo = {
        text: 'Todo 2',
        completed: true,
      };

      let newState: ITodosState;
      newState = todosReducer(state, TodoActions.addTodo({ todo: todo1 }));
      newState = todosReducer(newState, TodoActions.addTodo({ todo: todo2 }));
      newState = todosReducer(newState, TodoActions.clearCompleted());
      expect(newState.todos.length).toEqual(1);
    });
  });
});
