// You display a radio validation error by checking if the FormControl is invalid (required) and touched/dirty, then showing a message.

// ✅ Reactive Form
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>

// <div *ngIf="form.get('gender')?.errors?.['required'] && form.get('gender')?.touched">
//   Please select a gender
// </div>
// ✅ Template-driven Form
// <label>
//   <input type="radio" name="gender" value="male" ngModel required #gender="ngModel">
//   Male
// </label>

// <label>
//   <input type="radio" name="gender" value="female" ngModel required #gender="ngModel">
//   Female
// </label>

// <div *ngIf="gender.errors?.['required'] && gender.touched">
//   Please select a gender
// </div>
// ⚡ One-line (your style)

// Show radio validation error using *ngIf="control.errors?.required && control.touched" when no option is selected.

// 💡 Tip

// You can also use:

// *ngIf="control.invalid && (control.touched || control.dirty)"