import { ITodo } from '../interfaces/ITodo';
import { retrieveToDoList } from './todos.reducer.data-mapping';
export interface TodosState {
    todoList: ITodo[];
}

export const initialState: TodosState = {
    todoList: retrieveToDoList()
}

export function GetInitialState(): TodosState {
    return initialState;
}

