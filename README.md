# LabCorp Clinical Development UI Developer Assessment

## Thank you for your interest in working with us at LabCorp!

This project is a fork of [Todo MVC](http://todomvc.com/)

Your mission, should you choose to accept it, is to fork this repo and make the app functionally equivalent to: [http://todomvc.com/examples/vanillajs/](http://todomvc.com/examples/vanillajs/).

The previous developer left the project half-finshed, but quite a bit of infrastructure is in place and we'd like to see how you would finish it out.

- All of the styling for the app is complete and almost all of the HTML markup you'll need is present in the [app.component.html](https://github.com/labcorp-clinical-development/coding-assessment/blob/master/src/app/app.component.html) file.
- In order to complete this project, you're going to have to have knowledge of [Angular](https://angular.io), [Ngrx](https://ngrx.io/), Rxjs, inter-component communication and how to make components re-usable.
- You may **not** use Ngrx/Data or Ngrx/Entities to complete this project.
- It isn't necessary to write end-to-end tests for your work, but if you choose to write unit tests for your reducer or components, it would be a big plus.
- Your code *must* pass AOT compilation when running: `ng build`
- Neatness and organization count - **a lot**.

You'll find all of the code for todos in the [src/app/todos](https://github.com/labcorp-clinical-development/coding-assessment/tree/master/src/app/todos) module.

## Notes:

### Editing a todo

When editing a todo, you'll need to modify your form's HTML input class attribute to "edit". To make the form visible, it must come after the `div` classed "view" in the markup here: [todo-list.component.html](https://github.com/labcorp-clinical-development/coding-assessment/blob/master/src/app/todos/components/todo-list/todo-list.component.html)

### Message when no todos are present

Please add a message to be displayed when filtering by "Active" or "Completed" and no todos are present. A CSS class is available to use for your element, 'no-matches'
