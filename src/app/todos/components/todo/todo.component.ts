import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITodo } from '@app/todos/interfaces/ITodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {

  @Input()
  index: number;

  @Input()
  todo: ITodo;

  @Output()
  completeTodo = new EventEmitter<number>();

  markAsComplete(): void {
    this.completeTodo.emit(this.index);
  }

}
