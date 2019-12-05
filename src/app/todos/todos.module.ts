import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CreateTodoFormComponent } from './components/forms/create-todo/create-todo.component';
import { TodosService } from './services/todos.service';
import { todosReducer } from './state/todos.reducer';

const DECLARATIONS = [
  CreateTodoFormComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
  ],
  providers: [
    TodosService,
  ],
})
export class TodosModule {}
