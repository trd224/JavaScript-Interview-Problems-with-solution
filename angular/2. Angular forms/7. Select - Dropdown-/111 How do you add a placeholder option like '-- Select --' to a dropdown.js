// You add a placeholder option by creating a default <option> with empty value ("" or null) at the top of the dropdown.

// ✅ Full Example 1 — Reactive Form
// TS
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   form: FormGroup;
//   countries = ['India', 'USA', 'UK'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       country: ['', Validators.required] // ✅ start empty
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="country">
//     <option value="" disabled selected>-- Select --</option>

//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>
//   </select>

//   <div *ngIf="form.get('country')?.invalid && form.get('country')?.touched">
//     Please select a country
//   </div>

//   <button type="submit">Submit</button>

// </form>
// ✅ Full Example 2 — Template-driven Form
// TS
// countries = ['India', 'USA', 'UK'];
// selectedCountry = ''; // ✅ no selection initially
// HTML
// <form #form="ngForm">

//   <select name="country" [(ngModel)]="selectedCountry" required>
//     <option value="" disabled>-- Select --</option>

//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>
//   </select>

//   <div *ngIf="form.controls['country']?.invalid && form.controls['country']?.touched">
//     Please select a country
//   </div>

// </form>
// ⚡ One-line (your style)

// Add a placeholder by using a default <option value="">-- Select --</option> and initializing the model with empty value.

// 💡 Important
// Use value="" → represents no selection
// Use disabled → prevents selecting placeholder again
// Use Validators.required → enforce selection