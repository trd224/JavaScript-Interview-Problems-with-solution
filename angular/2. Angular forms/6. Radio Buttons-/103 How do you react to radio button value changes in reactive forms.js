// You react to radio button value changes in reactive forms by subscribing to the FormControl’s valueChanges observable.

// ✅ Example
// TS
// this.form = this.fb.group({
//   gender: ['male']
// });

// // ✅ listen to changes
// this.form.get('gender')?.valueChanges.subscribe(value => {
//   console.log('Selected:', value);
// });
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// ⚡ One-line (your style)

// Use control.valueChanges.subscribe() to react to radio button value changes in reactive forms.

// 💡 Alternative (full form)
// this.form.valueChanges.subscribe(val => {
//   console.log(val.gender);
// });
// ❗ Tip

// Remember to unsubscribe in large apps (or use takeUntil) to avoid memory leaks.