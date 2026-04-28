// ✅ One-line definition (your style)

// In Reactive Forms, min and max are applied using Angular validators (Validators.min() / Validators.max()) and optionally HTML attributes for UI restriction.

// ✅ Full Example

// TS

// import { FormGroup, FormControl, Validators } from '@angular/forms';

// myForm = new FormGroup({
//   age: new FormControl('', [
//     Validators.required,
//     Validators.min(18),
//     Validators.max(60)
//   ])
// });

// HTML

// <form [formGroup]="myForm">

//   <input 
//     type="number" 
//     formControlName="age"
//     min="18"
//     max="60"
//     placeholder="Enter age"
//   >

//   <div *ngIf="myForm.get('age')?.errors?.['min']">
//     Minimum age is 18
//   </div>

//   <div *ngIf="myForm.get('age')?.errors?.['max']">
//     Maximum age is 60
//   </div>

// </form>



// 🔥 Best practice

// ✔ Always use Validators in TS
// ✔ Use min/max in HTML for better UX