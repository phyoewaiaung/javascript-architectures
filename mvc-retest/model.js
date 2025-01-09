export class Model {
    constructor() {
      this.text = ""; // The state managed by the Model
    }
  
    setText(newText) {
      this.text = newText; // Update state
    }
  
    getText() {
      return this.text; // Retrieve state
    }
  }
  