// ✅ One-line definition

// In a Reactive Form, a single checkbox is bound using formControlName and stores a boolean value (true/false).

// ✅ Full Example

// TS

// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   agree: new FormControl(false)
// });

// onSubmit() {
//   console.log(this.myForm.value); 
//   // { agree: true/false }
// }

// HTML

// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <label>
//     <input type="checkbox" formControlName="agree">
//     Accept Terms
//   </label>

//   <br><br>

//   <button type="submit">Submit</button>

// </form>



// 🔍 How it works
// formControlName="agree" → binds checkbox to FormControl
// Default value false → unchecked
// Checked → true, Unchecked → false
// Value available via this.myForm.value.agree



// ✅ With validation (required checkbox)

// TS

// import { Validators } from '@angular/forms';

// myForm = new FormGroup({
//   agree: new FormControl(false, Validators.requiredTrue)
// });

// HTML

// <div *ngIf="myForm.get('agree')?.errors?.['required']">
//   You must accept terms
// </div>