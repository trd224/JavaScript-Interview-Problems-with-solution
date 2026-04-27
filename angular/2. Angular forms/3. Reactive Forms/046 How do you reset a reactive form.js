// We reset a reactive form in Angular using the reset() method on a FormGroup or FormControl.

// ✅ Basic Usage
// this.myForm.reset();

// 👉 This will:

// Clear all values
// Mark controls as pristine & untouched
// Reset validation state


// ✅ Example
// myForm = new FormGroup({
//   username: new FormControl('John'),
//   email: new FormControl('test@gmail.com')
// });

// this.myForm.reset();

// ✅ Reset with default values

// this.myForm.reset({
//   username: 'DefaultUser',
//   email: 'default@gmail.com'
// });


// 🔍 Reset single control
// this.myForm.get('username')?.reset();