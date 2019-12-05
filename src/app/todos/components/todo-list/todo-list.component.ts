import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ITodo } from '@app/todos/interfaces/ITodo';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todos: ITodo[];

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.todos$.subscribe(todos => this.todos = todos);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTodoCompleted(index: number): void {
    this.todosService.toggleComplete(index);
  }

}
