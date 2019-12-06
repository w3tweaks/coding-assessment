import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-mode',
  templateUrl: './filter-mode.component.html',
})
export class FilterModeComponent implements OnInit, OnDestroy {

  filterMode: FILTER_MODES;
  subscription: Subscription;

  constructor (
    private changeDetectorRef: ChangeDetectorRef,
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.filterMode$.subscribe(selectionMode => {
      this.filterMode = selectionMode;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeFilterMode(event: Event, mode: FILTER_MODES): void {
    event.preventDefault();
    this.todosService.changeFilterMode(mode);
  }

}
