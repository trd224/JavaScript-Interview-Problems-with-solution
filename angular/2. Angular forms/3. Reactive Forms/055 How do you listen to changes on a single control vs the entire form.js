// We listen to changes in Angular using valueChanges, either on a single control or on the entire form.

// 🔥 1. Listen to a single control
// this.myForm.get('username')?.valueChanges.subscribe(value => {
//   console.log('Username changed:', value);
// });

// 👉 Triggers only when username changes

// 🔥 2. Listen to the entire form
// this.myForm.valueChanges.subscribe(value => {
//   console.log('Form changed:', value);
// });

// 👉 Triggers when any control changes

// 🔍 Example
// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });
// Changing username:
// ✅ Single control subscription fires
// ✅ Form subscription fires
// Changing email:
// ❌ Username subscription does NOT fire
// ✅ Form subscription fires