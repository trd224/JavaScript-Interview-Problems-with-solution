// We subscribe to value changes in a reactive form in Angular using the valueChanges observable on a FormControl, FormGroup, or FormArray.

// ✅ Subscribe to entire form
// this.myForm.valueChanges.subscribe(value => {
//   console.log(value);
// });

// 👉 Fires whenever any field changes

// ✅ Subscribe to a specific control
// this.myForm.get('username')?.valueChanges.subscribe(value => {
//   console.log(value);
// });

// 👉 Fires only when username changes

// ✅ Example
// ngOnInit() {
//   this.myForm.valueChanges.subscribe(val => {
//     console.log('Form changed:', val);
//   });
// }

// 🔥 Important
// valueChanges is an Observable
// Emits latest value on every change
// Works for:
// FormControl
// FormGroup
// FormArray