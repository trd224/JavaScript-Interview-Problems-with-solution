// Radio buttons in Angular are grouped by using the same name (template-driven) or the same FormControl (formControlName) in reactive forms.

// ✅ Template-driven Form
// <label><input type="radio" name="gender" value="male" ngModel> Male</label>
// <label><input type="radio" name="gender" value="female" ngModel> Female</label>
// <label><input type="radio" name="gender" value="other" ngModel> Other</label>

// 👉 Same name="gender" → grouped

// ✅ Reactive Form
// this.form = this.fb.group({
//   gender: ['male']
// });
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// <label><input type="radio" formControlName="gender" value="other"> Other</label>

// 👉 Same formControlName="gender" → grouped

// ⚡ One-line (your style)

// Radio buttons are grouped using the same name (template-driven) or same formControlName (reactive forms).

// 💡 Key Idea
// Group = only one selection allowed
// Value = selected option stored in model