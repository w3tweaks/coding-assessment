import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoFormComponent implements OnInit {

  form: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [
        '', [Validators.required]
      ]
    });
  }

  onSubmit(): void {
    const todo: ITodo = {
      text: this.form.value,
      complete: false,
    };

    this.todosService.addTodo(todo);
    this.form.reset();
  }

}
