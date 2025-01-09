export class TodoView {
    constructor() {
      this.app = document.getElementById("app");
      this.input = document.getElementById("newTodo");
      this.addButton = document.getElementById("addTodo");
      this.todoList = document.getElementById("todoList");
    }
  
    bindAddTodo(handler) {
      this.addButton.addEventListener("click", () => {
        if (this.input.value.trim() !== "") {
          handler(this.input.value.trim());
          this.input.value = ""; // Clear the input field
        }
      });
    }
  
    bindToggleTodo(handler) {
      this.todoList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          const index = Array.from(this.todoList.children).indexOf(event.target);
          handler(index);
        }
      });
    }
  
    bindDeleteTodo(handler) {
      this.todoList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
          const index = Array.from(this.todoList.children).indexOf(event.target.parentElement);
          handler(index);
        }
      });
    }
  
    renderTodos(todos) {
      this.todoList.innerHTML = todos
        .map(
          (todo, index) =>
            `<li class="${todo.completed ? "completed" : ""}">
              ${todo.task}
              <button>Delete</button>
            </li>`
        )
        .join("");
    }
  }
  