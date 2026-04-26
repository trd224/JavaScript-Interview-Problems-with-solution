// 🔹 What is Custom Form Validation in Angular?

// 👉 Custom form validation is the process of creating our own validation logic to validate form fields based on specific requirements.


// 🔹 Why Use Custom Validation?
// Handle complex rules
// Validate business logic
// Go beyond built-in validators


// 🔹 Example
// Custom Validator

// import { AbstractControl } from '@angular/forms';

// export function noSpaceValidator(control: AbstractControl) {
//   return control.value.includes(' ') ? { noSpace: true } : null;
// }


// Use in Form

// import { FormControl } from '@angular/forms';

// username = new FormControl('', [noSpaceValidator]);


// 🔹 Template

// <input [formControl]="username">
// <p *ngIf="username.errors?.noSpace">
//   Space is not allowed
// </p>


// 🔹 Key Points
// Create your own validation function
// Return error object or null
// Works with reactive forms