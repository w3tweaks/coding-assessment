import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-filter-mode',
  templateUrl: './filter-mode.component.html',
})
export class FilterModeComponent implements OnInit, OnDestroy {

  filterMode: FILTER_MODES;
  subscription: Subscription;

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.filterMode$.subscribe(selectionMode => this.filterMode = selectionMode);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setFilterMode(filterMode: FILTER_MODES): void {
    this.todosService.filterTodos(filterMode);
  }

}
