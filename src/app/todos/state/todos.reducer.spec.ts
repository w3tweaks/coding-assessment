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
        completed: false
      }]);
    });
  });
  describe('removeTodo action', () => {
    it('Should remove the dispatched index data', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      }];
      const action = todoActions.removeTodo({index: 1});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true
      }]);
    });
  });
  describe('clearCompleted action', () => {
    it('Should clear all completed todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      },{
        text: 'Test3',
        completed: false
      }];
      const action = todoActions.clearCompleted();

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test3',
        completed: false
      }]);
    });
  });
  describe('updateTodoStatus action', () => {
    it('Should update the status of the todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      },{
        text: 'Test3',
        completed: false
      }];
      const action = todoActions.updateTodoStatus({index: 1, completed: false});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: false
      },{
        text: 'Test3',
        completed: false
      }]);
    });
  });

  describe('updateTodoText action', () => {
    it('Should update the text of the todos', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      }];
      const action = todoActions.updateTodoText({index: 1, text: 'Test3'});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true
      },{
        text: 'Test3',
        completed: true
      }]);
      initialState.todoList = [];
    });
    it('Should delete the todos when text is empty', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      }];
      const action = todoActions.updateTodoText({index: 1, text: ''});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: true
      }]);
      initialState.todoList = [];
    });
  });

  describe('toggleAllCompleted action', () => {
    it('Should toggleAll todos to checked/unchecked', () => {
      initialState.todoList = [{
        text: 'Test1',
        completed: true
      },{
        text: 'Test2',
        completed: true
      }];
      const action = todoActions.toggleAllCompleted({checked: false});

      const state = todosReducer(initialState, action);

      expect(state.todoList).toEqual([{
        text: 'Test1',
        completed: false
      },{
        text: 'Test2',
        completed: false
      }]);
    });
  });
});
