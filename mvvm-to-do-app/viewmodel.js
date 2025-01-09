import { TodoModel } from "./model.js";
import { TodoView } from "./view.js";

class TodoViewModel {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Bind events
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));

    // Initial render
    this.render();
  }

  handleAddTodo(task) {
    this.model.addTodo(task);
    this.render();
  }

  handleToggleTodo(index) {
    this.model.toggleTodo(index);
    this.render();
  }

  handleDeleteTodo(index) {
    this.model.deleteTodo(index);
    this.render();
  }

  render() {
    this.view.renderTodos(this.model.todos);
  }
}

new TodoViewModel(new TodoModel(), new TodoView());
