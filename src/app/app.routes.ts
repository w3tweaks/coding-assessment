import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos';

export const AppRoutes: Routes = [
    {
        path: '',
        component: TodosComponent
    }
];