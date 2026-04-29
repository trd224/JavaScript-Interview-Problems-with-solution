// A radio button group is made required by applying the required validator to the control (reactive) or adding the required attribute (template-driven).

// ✅ Reactive Form
// TS
// import { Validators } from '@angular/forms';

// this.form = this.fb.group({
//   gender: [null, Validators.required] // ❌ no selection initially
// });
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>

// <div *ngIf="form.get('gender')?.invalid && form.get('gender')?.touched">
//   Please select a gender
// </div>
// ✅ Template-driven Form
// <label><input type="radio" name="gender" value="male" ngModel required> Male</label>
// <label><input type="radio" name="gender" value="female" ngModel required> Female</label>

// <div *ngIf="gender.invalid && gender.touched">
//   Please select a gender
// </div>
// ⚡ One-line (your style)

// Radio group is required using Validators.required (reactive) or required attribute (template-driven).

// 💡 Important
// Validation applies to the group (single FormControl), not individual radios
// Value must not be null or empty