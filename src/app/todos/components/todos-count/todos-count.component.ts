import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-count',
  template: `
    <span class="todo-count">{{ count }} item{{ pluralize ? 's' : '' }} left</span>
  `,
})
export class TodosCountComponent implements OnInit, OnDestroy {

  count: number;
  pluralize: boolean;
  subscription: Subscription;

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.todos$.subscribe(todos => {
      this.count = todos && todos.filter(todo => !todo.completed).length || 0;
      this.pluralize = this.count !== 1;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
