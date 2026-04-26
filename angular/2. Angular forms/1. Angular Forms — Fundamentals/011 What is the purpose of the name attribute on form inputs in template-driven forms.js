// The name attribute in template-driven forms is used to uniquely identify and register a form control inside the NgForm.

// 👉 Purpose:

// It allows Angular to track the input field
// It connects the input with ngModel
// It is required for validation and form value tracking

// 👉 Example:

// <input type="text" name="username" ngModel>

// 👉 Important:

// Without name, Angular will not register the control in the form

// 👉 In short:
// The name attribute helps Angular identify and manage each form control.