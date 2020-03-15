import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '@app/todos/interfaces/ITodo';
import { Store } from '@ngrx/store';
import * as fromTodoStore from '@app/todos/state';
import { map } from 'rxjs/operators';
import { TodosService } from '@app/todos/services/todos.service';
import { Location } from '@angular/common';

@Component({
    selector: 'todos-footer',
    templateUrl: 'todos-footer.html'
})

export class TodosFooterComponent {
    todosListLength$: Observable<object>;
    constructor(private router: Router, public todoStore: Store<fromTodoStore.TodosState>, public todosService: TodosService, public location: Location){
        this.todosListLength$ = this.todoStore.select(fromTodoStore.allTodos).pipe(map((list) => {
            let itemLeftCounter = 0;
            let itemCompletedCounter = 0;
            list.forEach((item) => {
                if(!item.completed) {
                    itemLeftCounter++;
                } else if (item.completed){
                    itemCompletedCounter++;
                }
            })
            return {itemLeftCounter, itemCompletedCounter};
        }));
    }
    navigation(page) {
        if(page === 'active') {
            this.router.navigate(['active']);
        } else if(page === 'completed') {
            this.router.navigate(['completed']);
        } else {
            this.router.navigate(['']);
        }
    }
}