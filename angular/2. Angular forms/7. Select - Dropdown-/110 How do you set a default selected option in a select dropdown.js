// You set a default selected option by initializing the model/FormControl with the desired value.

// ✅ Full Example 1 — Reactive Form (Primitive)
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
// }
// HTML
// <form [formGroup]="form">

//   <select formControlName="country">
//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>
//   </select>

// </form>
// ✅ Full Example 2 — Reactive Form (Object)
// TS
// users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' }
// ];

// this.form = this.fb.group({
//   user: [this.users[1]] // ✅ default object (Jane)
// });
// HTML
// <select formControlName="user">
//   <option *ngFor="let user of users" [ngValue]="user">
//     {{ user.name }}
//   </option>
// </select>
// ✅ Full Example 3 — Template-driven Form
// TS
// selectedCountry = 'India'; // ✅ default
// countries = ['India', 'USA', 'UK'];
// HTML
// <select name="country" [(ngModel)]="selectedCountry">
//   <option *ngFor="let country of countries" [value]="country">
//     {{ country }}
//   </option>
// </select>
// ⚡ One-line (your style)

// Default select option is set by initializing the model/FormControl with the desired value.

// 💡 Important
// Value must match exactly
// For objects → use [ngValue]