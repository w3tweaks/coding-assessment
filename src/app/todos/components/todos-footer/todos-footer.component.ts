import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
})
export class TodosFooterComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  visible = false;

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.allTodos$.subscribe(todos => this.visible = todos && todos.length > 0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
