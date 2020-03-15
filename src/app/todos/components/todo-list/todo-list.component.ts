import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '@app/todos/interfaces/ITodo';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {
  @Input() item: ITodo;
  @Input() index?: number;
  editedTodo: boolean = false;
  constructor( private todosService: TodosService ) {}
  onChange($event) {
    this.todosService.updateTodoStatus($event.target.value, $event.target.checked);
  }

  closeBtnClick(index) {
    this.todosService.removeTodo(index);
  }

  doubleClickFunction() {
    this.editedTodo = true;
    console.log('editedTodo');
  }

  blurFn() {
    this.editedTodo = false;
  }

  doneEditing(event, index) {
    this.editedTodo = false;
    this.todosService.updateTodoText(index, event.target.value);
  }
}
