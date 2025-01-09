import { BindingViewModel } from "./viewmodel.js";

const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

// Initialize the ViewModel
const viewModel = new BindingViewModel();

// Bind the ViewModel to the View
viewModel.bindView(inputElement, outputElement);
