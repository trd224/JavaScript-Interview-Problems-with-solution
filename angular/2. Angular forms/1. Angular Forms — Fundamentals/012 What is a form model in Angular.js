// A form model in Angular is the data structure that represents the form’s values and state.

// 👉 It stores:

// Field values
// Validation status (valid, invalid)
// State (touched, dirty, etc.)




// Example (Template-Driven Form)

// Here Angular creates the form model automatically:

// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
//   <input name="username" ngModel>
//   <button type="submit">Submit</button>
// </form>


// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   onSubmit(form: NgForm) {
//     console.log(form.value);      // { username: 'entered value' }
//     console.log(form.valid);      // true/false
//   }

// }

// 👉 myForm is the form model created by Angular.





// Example (Reactive Form)

// <form [formGroup]="form" (ngSubmit)="onSubmit()">
//   <input formControlName="username">
//   <button type="submit">Submit</button>
// </form>

// import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   form = new FormGroup({
//     username: new FormControl('')
//   });

//   onSubmit() {
//     console.log(this.form.value);   // { username: 'entered value' }
//     console.log(this.form.valid);   // true/false
//   }

// }