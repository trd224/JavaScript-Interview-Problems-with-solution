// statusChanges in Angular is an observable that emits the validation status (VALID, INVALID, PENDING, DISABLED) whenever a form control, group, or array status changes.

// ✅ Simple Meaning

// We use statusChanges to track validation state changes of a form.

// ✅ Example (FormControl)
// this.username.statusChanges.subscribe(status => {
//   console.log(status);
// });

// 👉 Output can be:

// "VALID"
// "INVALID"
// "PENDING"
// "DISABLED"


// ✅ Example (FormGroup)
// this.myForm.statusChanges.subscribe(status => {
//   console.log('Form status:', status);
// });


// 🔥 When it triggers
// When validation changes
// When value changes affect validity
// When enabling/disabling controls
// When async validators run (PENDING)



// ⚡ Difference from valueChanges
// valueChanges → emits value
// statusChanges → emits validation status