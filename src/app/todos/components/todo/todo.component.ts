import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ITodo } from '@app/todos/interfaces/ITodo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  @Output()
  removeTodo = new EventEmitter<number>();

  editing = false;

  markAsComplete(): void {
    this.completeTodo.emit(this.index);
  }

  remove(): void {
    this.removeTodo.emit(this.index);
  }

  toggleEditMode(): void {
    this.editing = true;
  }

  onTodoUpdated(updated: boolean): void {
    if (updated) {
      this.editing = false;
    }
  }

}
