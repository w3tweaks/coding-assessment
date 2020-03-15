import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTodoStore from '@app/todos/state';
import { ITodo } from '@app/todos/interfaces/ITodo';
import { map } from 'rxjs/operators';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'completed-todos',
  templateUrl: './completed-todos.html',
})
export class CompletedTodosComponent {
  completedTodosList$: Observable<ITodo[]>;
  constructor(public todoStore: Store<fromTodoStore.TodosState>, private todosService: TodosService) {
    this.completedTodosList$ = this.todoStore.select(fromTodoStore.allTodos).pipe(map((todos) => {
      let activeTodos = [];
      todos.forEach((todo) => {
        if(todo.completed){
          activeTodos.push(todo);
        }
      });
      return activeTodos;
    }));
  }
}
