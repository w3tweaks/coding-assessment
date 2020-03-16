import { ITodo } from './../interfaces';
import * as todoActions from './todo.actions';
import { initialState } from './todos.state';
import { clone } from '@app/lib/utils';
import { todosReducer } from './todos.reducer';

describe('Todos Reducer', () => {
  afterEach(() => {
    initialState.todoList = [];
  });
  describe('addTodo action', () => {
    it('Should return dispatched data', () => {
      const action = todoActions.addTodo({text: 'Test'});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test',
        completed: false,
        index: 0
      }]);
    });
  });
  describe('removeTodo action', () => {
    it('Should remove the dispatched index data', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 0
      },{
        text: 'Test2',
        completed: true,
        index: 1
      }];
      const action = todoActions.removeTodo({index: 1});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true,
        index: 0
      }]);
    });
  });
  describe('clearCompleted action', () => {
    it('Should clear all completed todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 0
      },{
        text: 'Test2',
        completed: true,
        index: 1
      },{
        text: 'Test3',
        completed: false,
        index: 3
      }];
      const action = todoActions.clearCompleted();

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test3',
        completed: false,
        index: 3
      }]);
    });
  });
  describe('updateTodoStatus action', () => {
    it('Should update the status of the todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 1
      },{
        text: 'Test2',
        completed: true,
        index: 2
      },{
        text: 'Test3',
        completed: false,
        index: 3
      }];
      const action = todoActions.updateTodoStatus({index: 1, completed: false});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: false,
        index: 1
      },{
        text: 'Test2',
        completed: true,
        index: 2
      },{
        text: 'Test3',
        completed: false,
        index: 3
      }]);
    });
  });

  describe('updateTodoText action', () => {
    it('Should update the text of the todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 1
      },{
        text: 'Test2',
        completed: true,
        index: 2
      }];
      const action = todoActions.updateTodoText({index: 1, text: 'Test3'});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test3',
        completed: true,
        index: 1
      },{
        text: 'Test2',
        completed: true,
        index: 2
      }]);
      initialState.todoList = [];
    });
    it('Should delete the todos when text is empty', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 0
      },{
        text: 'Test2',
        completed: true,
        index: 1
      }];
      const action = todoActions.updateTodoText({index: 1, text: ''});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true,
        index: 0
      }]);
      initialState.todoList = [];
    });
  });

  describe('toggleAllCompleted action', () => {
    it('Should toggleAll todos to checked/unchecked', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true,
        index: 0
      },{
        text: 'Test2',
        completed: true,
        index: 1
      }];
      const action = todoActions.toggleAllCompleted({checked: false});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: false,
        index: 0
      },{
        text: 'Test2',
        completed: false,
        index: 1
      }]);
    });
  });
});
