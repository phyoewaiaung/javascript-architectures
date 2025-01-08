class Model {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    getTasks() {
      return this.tasks;
    }
  }
  
  export default Model;
  