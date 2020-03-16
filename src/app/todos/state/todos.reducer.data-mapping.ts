import { clone } from '@app/lib/utils';
let localStorageItemName = 'angular-todos-list';

export function todosMapping (todos, text) {
    let todoList = (todos) ? todos : [];
    todoList = ([{ 
        text: text,
        completed: false
    }]).concat(todoList);
    localStorage.setItem(localStorageItemName, JSON.stringify(todoList));
    return todoList;
}

export function retrieveToDoList() {
    let localStorateToDos = JSON.parse(localStorage.getItem(localStorageItemName));
    return (localStorateToDos) ? localStorateToDos : [];
}

export function updateTodoStatusMapping (todos, index, completed) {
    let todoList = (todos) ? clone(todos) : [];
    if (todoList) {
        todoList[index].completed = completed;
    }
    localStorage.setItem(localStorageItemName, JSON.stringify(todoList));
    return todoList;
}

export function clearCompletedTodos(todoList) {
    let activeItem = todoList.filter(todo => !todo.completed);
    localStorage.setItem(localStorageItemName, JSON.stringify(activeItem));
    return activeItem;
}

export function removeTodo(todoList, index) {
    const updatedTodos = [...todoList];
    updatedTodos.splice(index, 1);
    localStorage.setItem(localStorageItemName, JSON.stringify(updatedTodos));
    return updatedTodos;
}

export function updateTodoTextMapping (todos, index, text) {
    let todoList = (todos) ? clone(todos) : [];
    if (todoList) {
        if(text != ''){
            todoList[index].text = text;
        } else {
            todoList.splice(index, 1);
        }
    }

    localStorage.setItem(localStorageItemName, JSON.stringify(todoList));
    return todoList;
}

export function toggleAllCompletedMapping (todos, checked){
    let todoList = (todos) ? clone(todos) : [];
    todoList.forEach((item) => {
        item.completed = checked;
    });
    localStorage.setItem(localStorageItemName, JSON.stringify(todoList));

    return todoList;
}