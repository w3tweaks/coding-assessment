import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CompleteAllComponent } from './components/complete-all/complete-all.component';
import { TodosListComponent } from './components/todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { todosReducer } from './state/todos.reducer';
import { TodosComponentModule } from './components/components.module';
import { ComponentModules } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { TodosRoutes } from './todos.routes';
import { ActiveTodosComponent } from './pages/active-todos/active-todos';
import { CompletedTodosComponent } from './pages/completed-todos/completed-todos';
import { TodosComponent } from './todos';
import { GetInitialState } from './state';

@NgModule({
  imports: [
    StoreModule.forFeature('todos', todosReducer, {
      initialState: GetInitialState
    })
  ],
  providers: [
  ],
})
export class TodosReducerModule {}
