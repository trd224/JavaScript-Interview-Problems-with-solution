// We bind a reactive form to a template in Angular using the formGroup directive, which connects a FormGroup from the component to the <form> element.

// ✅ Step 1: Create Form in Component
// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });


// ✅ Step 2: Bind using formGroup
// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <input formControlName="username">
//   <input formControlName="email">

//   <button type="submit">Submit</button>

// </form>


// 🔥 How it works
// [formGroup]="myForm" → links HTML form with TS FormGroup
// formControlName → connects inputs to specific controls
// Angular syncs value + validation automatically


// ✅ Component Method
// onSubmit() {
//   console.log(this.myForm.value);
// }