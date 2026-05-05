// A radio button is set as default selected by assigning its value as the initial value of the model/FormControl.

// ✅ Reactive Form
// this.form = this.fb.group({
//   gender: ['male'] // ✅ default selected
// });
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// ✅ Template-driven Form
// <label><input type="radio" name="gender" value="male" ngModel checked> Male</label>
// <label><input type="radio" name="gender" value="female" ngModel> Female</label>
// ⚡ One-line (your style)

// Default radio selection is set by initializing the model/FormControl with the desired value.

// 💡 Best Practice
// Reactive → set value in TS ✅
// Template-driven → checked or bind model value