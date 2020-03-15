import { Routes } from '@angular/router';
import { ActiveTodosComponent } from './pages/active-todos/active-todos';
import { CompletedTodosComponent } from './pages/completed-todos/completed-todos';
import { TodosComponent } from './todos';

export const TodosRoutes: Routes = [{
        path: 'completed',
        component: CompletedTodosComponent
    }, {
        path: 'active',
        component: ActiveTodosComponent
    }
];