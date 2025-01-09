export class BindingViewModel {
    constructor() {
      this.text = ""; // The state managed by the ViewModel
      this.bindings = []; // Array to track View-ViewModel bindings
    }
  
    bindView(inputElement, outputElement) {
      // Bind input changes to ViewModel state
      inputElement.addEventListener("input", (event) => {
        this.text = event.target.value; // Update ViewModel state
        this.updateView(outputElement); // Reflect state in the output element
      });
  
      // Reflect initial ViewModel state in the output element
      this.updateView(outputElement);
    }
  
    updateView(outputElement) {
      outputElement.textContent = this.text; // Update the UI
    }
  }
  