class View {
    constructor() {
      this.taskForm = document.getElementById('task-form');
      this.taskInput = document.getElementById('task-input');
      this.taskList = document.getElementById('task-list');
    }
  
    getTaskInput() {
      return this.taskInput.value.trim();
    }
  
    clearTaskInput() {
      this.taskInput.value = '';
    }
  
    renderTasks(tasks) {
      this.taskList.innerHTML = tasks
        .map(
          (task, index) => `
          <li>
            ${task}
            <span class="delete" data-index="${index}">&times;</span>
          </li>
        `
        )
        .join('');
    }
  
    bindAddTask(handler) {
      this.taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = this.getTaskInput();
        if (task) {
          handler(task);
          this.clearTaskInput();
        }
      });
    }
  
    bindDeleteTask(handler) {
      this.taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
          const index = event.target.dataset.index;
          handler(index);
        }
      });
    }
  }
  
  export default View;
  