// reset() in Angular resets both the value and the state of a form control or form group to its initial condition.

// 🔥 What happens to control state after reset()

// When we call:

// this.myForm.reset();

// 👉 Angular updates state like this:

// value → set to null (or provided default)
// pristine → true ✅
// dirty → false
// touched → false
// untouched → true ✅
// valid / invalid → recalculated based on validators
// errors → cleared (until user interacts again)


// ✅ Example
// this.myForm.get('username')?.reset();

// 👉 The control becomes:

// clean (not dirty)
// not touched
// value cleared

// ⚡ With default values
// this.myForm.reset({
//   username: 'John'
// });

// 👉 Value becomes 'John', but still:

// pristine
// untouched