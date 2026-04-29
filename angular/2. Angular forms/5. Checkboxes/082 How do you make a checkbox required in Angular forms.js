// A checkbox in Angular is made required by using the Validators.requiredTrue validator.

// ✅ Example (Reactive Form)
// TS
// import { FormBuilder, Validators } from '@angular/forms';

// this.form = this.fb.group({
//   agree: [false, Validators.requiredTrue]  // ✅ must be checked
// });
// HTML
// <input type="checkbox" formControlName="agree">

// <div *ngIf="form.get('agree')?.invalid && form.get('agree')?.touched">
//   You must accept terms
// </div>
// ⚡ One-line (your style)

// Checkbox is required in Angular by using Validators.requiredTrue, which only passes when the value is true.

// ❗ Important
// Validators.required ❌ (not correct for checkbox)
// Validators.requiredTrue ✅ (correct for checkbox)