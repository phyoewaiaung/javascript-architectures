import Model from './model.js';
import View from './view.js';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask);
    this.view.bindDeleteTask(this.handleDeleteTask);

    this.onTasksChanged(this.model.getTasks());
  }

  onTasksChanged = (tasks) => {
    this.view.renderTasks(tasks);
  };

  handleAddTask = (task) => {   
    this.model.addTask(task);
    this.onTasksChanged(this.model.getTasks());
  };

  handleDeleteTask = (index) => {
    this.model.deleteTask(index);
    this.onTasksChanged(this.model.getTasks());
  };
}

new Controller(new Model(), new View());
