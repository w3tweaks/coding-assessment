import { ITodo } from '../interfaces/ITodo';
import { FILTER_MODES } from '../constants/filter-modes';
import { retrieveToDoList } from './todos.reducer.data-mapping';
export interface TodosState {
    filterMode?: FILTER_MODES;
    todoList: ITodo[];
}

export const initialState: TodosState = {
    filterMode: 'All',
    todoList: retrieveToDoList()
}

export function GetInitialState(): TodosState {
    return initialState;
}

