import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-complete-all',
  styleUrls: [
    './complete-all.component.scss',
  ],
  templateUrl: './complete-all.component.html',
})
export class CompleteAllComponent implements OnInit, OnDestroy {

  multipleTodosExist = false;
  subscription: Subscription;

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.todos$.subscribe(todos => {
      this.multipleTodosExist = todos && todos.length > 1;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleCompleteAll(): void {
    console.log('here');
    this.todosService.toggleAllCompleted();
  }

}
