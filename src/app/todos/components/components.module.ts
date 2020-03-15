import { NgModule } from '@angular/core';
import { TodosHeaderComponent } from './todos-header/todos-header';
import { TodosFooterComponent } from './todos-footer/todos-footer';
import { CommonModule } from '@angular/common';
import { CompleteAllComponent } from './complete-all/complete-all.component';
import { TodosListComponent } from './todo-list/todo-list.component';
import { MessageComponent } from '@app/todos/components/message/message';

@NgModule({
    declarations: [
        TodosHeaderComponent,
        TodosFooterComponent,
        CompleteAllComponent,
        TodosListComponent,
        MessageComponent
    ],
    imports: [CommonModule],
    exports: [
        TodosHeaderComponent,
        TodosFooterComponent,
        CompleteAllComponent,
        TodosListComponent,
        MessageComponent
    ]
})
export class TodosComponentModule {}
