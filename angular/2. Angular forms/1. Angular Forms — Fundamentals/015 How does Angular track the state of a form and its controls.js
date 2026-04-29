// Angular tracks the state of a form and its controls using properties like valid, invalid, touched, untouched, dirty, and pristine.

// 👉 These properties are available on:

// Form (NgForm / FormGroup)
// Controls (ngModel / FormControl)

// Example (Template-Driven Form)
// <form #myForm="ngForm">

//   <input name="username" ngModel required #u="ngModel">

//   <p>Form Valid: {{ myForm.valid }}</p>
//   <p>Control Valid: {{ u.valid }}</p>
//   <p>Touched: {{ u.touched }}</p>
//   <p>Dirty: {{ u.dirty }}</p>

// </form>

// 👉 Angular automatically updates:

// valid/invalid → based on validation
// touched → when user focuses & leaves field
// dirty → when value changes

// Example (Reactive Form)
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// form = new FormGroup({
//   username: new FormControl('', Validators.required)
// });

// ngOnInit() {
//   console.log(this.form.get('username')?.touched);
//   console.log(this.form.get('username')?.dirty);
//   console.log(this.form.valid);
// }
// <form [formGroup]="form">
//   <input formControlName="username">
// </form>
// 🔑 In short:

// Angular tracks form state using built-in properties on form and form control objects.