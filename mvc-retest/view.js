export class View {
    constructor() {
      this.inputElement = document.getElementById("input");
      this.outputElement = document.getElementById("output");
    }
  
    getInputValue() {
      return this.inputElement.value; // Get the current value of the input
    }
  
    setOutputValue(value) {
      this.outputElement.textContent = value; // Set the output display
    }
  
    bindInputChange(handler) {
      this.inputElement.addEventListener("input", handler); // Bind input event to a handler
    }
  }
  