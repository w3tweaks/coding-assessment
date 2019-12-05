import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoFormComponent implements OnInit {

  form: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      todo: [
        '', [Validators.required]
      ]
    });
  }

}
