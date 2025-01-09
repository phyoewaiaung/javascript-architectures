export class TodoModel {
    constructor() {
      this.todos = []; // List of todos
    }
  
    addTodo(task) {
      this.todos.push({ task, completed: false });
    }
  
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
      