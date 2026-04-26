// Form controls in Angular are objects (instances of the FormControl class) that track the value, validation, and state of a single input field.

// Example (Reactive Form)
// TypeScript
// import { FormControl } from '@angular/forms';

// username = new FormControl('John');

// ngOnInit() {
//   console.log(this.username.value);   // John
//   console.log(this.username.valid);   // true
// }
// HTML
// <input [formControl]="username">

// 👉 Here, username is a form control object that tracks:

// value → 'John'
// state → touched, dirty
// validation → valid/invalid







// ✅ Full Example (Template-Driven Form)
// HTML
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <label>Username:</label>
//   <input 
//     type="text" 
//     name="username" 
//     ngModel 
//     required 
//     #u="ngModel"
//   >

//   <p>Value: {{ u.value }}</p>
//   <p>Valid: {{ u.valid }}</p>
//   <p>Touched: {{ u.touched }}</p>

//   <button type="submit">Submit</button>

// </form>

// TypeScript
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   onSubmit(form: NgForm) {
//     console.log(form.value);   // { username: 'entered value' }
//     console.log(form.valid);   // true/false
//   }

// }

// 🔑 What’s happening here:
// ngModel → creates form control
// name="username" → registers control
// #u="ngModel" → gives access to control object
// myForm → represents full form (NgForm)