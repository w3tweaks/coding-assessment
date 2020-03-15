import { ChangeDetectionStrategy, Component, ViewChild, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTodoStore from './state';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ITodo } from './interfaces/ITodo';
import { TodosListComponent } from './components/todo-list/todo-list.component';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.html',
})
export class TodosComponent {
  @ViewChild(Input) todoListInput: Input;
  todosList$: Observable<ITodo[]>;
  constructor(public todoStore: Store<fromTodoStore.TodosState>, private todosService: TodosService) {
    this.todosList$ = this.todoStore.select(fromTodoStore.allTodos);
  }
}
