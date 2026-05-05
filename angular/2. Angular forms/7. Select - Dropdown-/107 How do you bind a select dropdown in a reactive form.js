// A select dropdown in a reactive form is bound using a FormControl (formControlName) on <select> and value / [ngValue] on <option>.

// ✅ Full Example (Reactive Form – Simple Values)
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
//       country: ['USA'] // ✅ default selected
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="country">
//     <option value="">Select Country</option>

//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>
//   </select>

//   <p>Selected: {{ form.get('country')?.value }}</p>

//   <button type="submit">Submit</button>

// </form>
// Output
// { country: 'USA' }
// ✅ Full Example (With Objects)
// TS
// users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' }
// ];

// this.form = this.fb.group({
//   user: [this.users[0]] // ✅ default object
// });
// HTML
// <select formControlName="user">
//   <option *ngFor="let user of users" [ngValue]="user">
//     {{ user.name }}
//   </option>
// </select>

// <p>Selected: {{ form.value.user.name }}</p>
// ⚡ One-line (your style)

// Bind select dropdown in reactive forms using formControlName on <select> and [value]/[ngValue] on <option>.

// 💡 Key Points
// formControlName → binds select to form
// [value] → for strings
// [ngValue] → for objects