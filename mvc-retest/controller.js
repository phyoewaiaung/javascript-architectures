export class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // Bind the View's input change event to the Controller's handler
      this.view.bindInputChange(this.handleInputChange.bind(this));
    }
  
    handleInputChange() {
      // Get the new value from the View
      // const newText = this.view.getInputValue();
  
      // Update the Model with the new value
      this.model.setText(this.view.getInputValue());
  
      // Update the View to reflect the Model's updated state
      this.view.setOutputValue(this.model.getText());
    }
  }
  