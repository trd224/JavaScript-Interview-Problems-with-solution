// We enable a disabled control in Angular using the enable() method on a FormControl or via its parent FormGroup.

// ✅ Enable a single control
// this.myForm.get('username')?.enable();

// 👉 Control becomes:

// Editable in UI
// Included again in form.value
// Validation starts working again

// ✅ Example
// myForm = new FormGroup({
//   username: new FormControl({ value: 'John', disabled: true })
// });

// // later
// this.myForm.get('username')?.enable();

// ✅ Enable all controls (FormGroup)
// this.myForm.enable();