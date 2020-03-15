import { Component } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
    selector: 'todos-header',
    templateUrl: 'todos-header.html'
})

export class TodosHeaderComponent {
    constructor(private todosService: TodosService) {
        
    }
    pushTodos(event) {
        this.todosService.addTodo(event.target.value);
        event.target.value = "";
    }
}