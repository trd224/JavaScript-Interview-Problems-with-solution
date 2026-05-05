// You use *ngFor on <option> to loop through an array and render each item as a dropdown option.

// ✅ Full Example 1 — Reactive Form
// TS
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   form: FormGroup;
//   countries = ['India', 'USA', 'UK'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       country: [''] // no default
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="country">

//     <option value="">-- Select Country --</option>

//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>

//   </select>

//   <p>Selected: {{ form.value.country }}</p>

//   <button type="submit">Submit</button>

// </form>
// ✅ Full Example 2 — With Objects
// TS
// users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' }
// ];

// this.form = this.fb.group({
//   user: [null]
// });
// HTML
// <select formControlName="user">
//   <option value="">-- Select User --</option>

//   <option *ngFor="let user of users" [ngValue]="user">
//     {{ user.name }}
//   </option>
// </select>

// <p>Selected: {{ form.value.user?.name }}</p>