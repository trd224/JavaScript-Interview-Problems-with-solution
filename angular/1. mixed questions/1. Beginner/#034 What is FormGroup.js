// 🔹 What is FormGroup in Angular?

// FormGroup is a class in Angular used to group multiple form controls into a single object.



// 🔹 Why Use FormGroup?
// Manage complete form data
// Track form state (valid, invalid, touched)
// Apply validation to multiple fields


// 🔹 Example
// Component (TypeScript)

// import { FormGroup, FormControl } from '@angular/forms';

// export class AppComponent {
//   loginForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl('')
//   });

//   onSubmit() {
//     console.log(this.loginForm.value);
//   }
// }


// Template (HTML)

// <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
//   <input formControlName="username">
//   <input formControlName="password">
//   <button type="submit">Login</button>
// </form>



// 🔹 Accessing Values
// this.loginForm.value
// this.loginForm.get('username')?.value