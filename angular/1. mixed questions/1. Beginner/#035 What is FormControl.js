// 🔹 What is FormControl in Angular?

// FormControl is a class in Angular used to manage the value and state of a single form input field.



// 🔹 Why Use FormControl?
// Track input value
// Validate user input
// Manage field state (touched, dirty, valid, invalid)



// 🔹 Example
// Component (TypeScript)

// import { FormControl } from '@angular/forms';

// export class AppComponent {
//   username = new FormControl('');
// }


// <input [formControl]="username">
// <p>{{ username.value }}</p>




// 🔹 With Validation

// import { FormControl, Validators } from '@angular/forms';

// username = new FormControl('', [
//   Validators.required,
//   Validators.minLength(3)
// ]);



// 🔹 Check Status

// this.username.valid
// this.username.invalid
// this.username.touched
// this.username.dirty




// 🔹 Key Points
// Represents single input field
// Used inside FormGroup
// Handles value + validation + state