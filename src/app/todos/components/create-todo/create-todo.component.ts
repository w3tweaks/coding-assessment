import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-todo-form',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoFormComponent implements AfterViewInit, OnInit {

  @ViewChild('textInput', { static: false })
  textInput: ElementRef;

  form: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private todosService: TodosService,
  ) {}

  ngAfterViewInit(): void {
    this.focusTextInput();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [
        '', [Validators.required]
      ]
    });
  }

  onSubmit(): void {
    const todo: ITodo = {
      text: this.form.value.text,
      completed: false,
    };

    this.todosService.addTodo(todo);
    this.form.reset();
    this.focusTextInput();
  }

  focusTextInput(): void {
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    }, 100);
  }

}
