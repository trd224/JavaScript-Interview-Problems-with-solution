// valueChanges in Angular is an observable that emits the latest value whenever a form control, group, or array value changes.

// ✅ Simple Meaning

// We use valueChanges to listen to real-time changes in form data.

// ✅ Example (FormControl)
// this.username.valueChanges.subscribe(value => {
//   console.log(value);
// });

// 👉 Fires on every input change

// ✅ Example (FormGroup)
// this.myForm.valueChanges.subscribe(value => {
//   console.log(value);
// });

// 👉 Emits full form value:

// {
//   "username": "John",
//   "email": "test@gmail.com"
// }

// 🔥 Key Points
// It is an Observable (RxJS)
// Emits every time value changes
// Works on:
// FormControl
// FormGroup
// FormArray

// ⚠️ Important
// Also triggers when we use:
// setValue()
// patchValue()
// Does NOT trigger when:
// Control is disabled (by default behavior)