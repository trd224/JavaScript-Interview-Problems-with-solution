// A validation error for a required checkbox is shown by checking if the FormControl is invalid and touched (or dirty) and then displaying a message.

// ✅ Example (Reactive Form)
// TS
// this.form = this.fb.group({
//   agree: [false, Validators.requiredTrue]
// });
// HTML
// <input type="checkbox" formControlName="agree">

// <div *ngIf="form.get('agree')?.invalid && form.get('agree')?.touched">
//   You must accept terms
// </div>
// ⚡ One-line (your style)

// Show checkbox validation error using *ngIf="control.invalid && control.touched" when requiredTrue fails.