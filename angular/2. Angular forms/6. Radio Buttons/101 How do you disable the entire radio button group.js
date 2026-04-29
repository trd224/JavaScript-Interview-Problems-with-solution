// To disable the entire radio button group, you disable the FormControl (reactive) or use the disabled attribute (template-driven).

// ✅ Reactive Form
// TS
// this.form.get('gender')?.disable(); // ✅ disables all radio buttons

// 👉 To enable again:

// this.form.get('gender')?.enable();
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// ✅ Template-driven Form
// <label><input type="radio" name="gender" value="male" ngModel disabled> Male</label>
// <label><input type="radio" name="gender" value="female" ngModel disabled> Female</label>
// ⚡ One-line (your style)

// Disable entire radio group using formControl.disable() (reactive) or disabled attribute on all radios (template-driven).

// 💡 Better (dynamic disable in template-driven)
// <input type="radio" name="gender" [disabled]="isDisabled" ngModel>




// You can disable the entire radio group inside FormGroup at initialization by setting the control as disabled.

// ✅ Reactive Form (inside FormGroup)
// TS
// this.form = this.fb.group({
//   gender: [{ value: 'male', disabled: true }] // ✅ disabled by default
// });
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// ⚡ One-line (your style)

// Disable radio group in FormGroup using { value: initialValue, disabled: true }.

// 💡 Enable later
// this.form.get('gender')?.enable();