// We set the value of a control in a reactive form in Angular using the setValue() method on a FormControl or FormGroup.

// ✅ 1. Set value for a single control
// this.myForm.get('username')?.setValue('John');

// 👉 Updates only that control

// ✅ 2. Set value for entire form (FormGroup)
// this.myForm.setValue({
//   username: 'John',
//   email: 'john@gmail.com'
// });

// 👉 ⚠️ Must provide all fields in the form

// 🔥 Important Rule
// setValue() requires exact structure match
// If any field is missing → ❌ error



// ✅ Example
// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });

// this.myForm.setValue({
//   username: 'John',
//   email: 'test@gmail.com'
// });