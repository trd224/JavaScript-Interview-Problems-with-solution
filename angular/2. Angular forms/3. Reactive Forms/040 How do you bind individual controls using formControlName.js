// We bind individual controls in a reactive form in Angular using the formControlName directive, which connects an input field to a specific FormControl inside a FormGroup.

// ✅ Step 1: Define FormGroup

// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });

// ✅ Step 2: Bind controls using formControlName

// <form [formGroup]="myForm">

//   <input formControlName="username">
//   <input formControlName="email">

// </form>

// 🔥 How it works

// formControlName="username"
//      👉 links input to myForm.controls.username
// Angular automatically syncs:
//      Value
//      Validation
//      State (touched, dirty, etc.)