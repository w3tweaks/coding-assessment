import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-clear-completed',
  template: `
    <button *ngIf="completedTodosExist" class="clear-completed" (click)="clearCompleted()">Clear completed</button>
  `
})
export class ClearCompletedComponent implements OnInit, OnDestroy {

  completedTodosExist = false;
  subscription: Subscription;

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.todos$.subscribe(todos => this.completedTodosExist = todos && todos.filter(todo => todo.completed).length > 0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearCompleted(): void {
    this.todosService.clearCompleted();
  }

}
