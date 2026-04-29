// We disable a form control programmatically in Angular using the disable() method on a FormControl or via a FormGroup.

// ✅ Disable a single control
// this.myForm.get('username')?.disable();

// 👉 Control becomes:

// Disabled in UI
// Excluded from form.value

// ✅ Enable again
// this.myForm.get('username')?.enable();

// ✅ Disable at creation time
// username = new FormControl({ value: 'John', disabled: true });

// ✅ Using FormBuilder
// this.myForm = this.fb.group({
//   username: [{ value: 'John', disabled: true }]
// });

// 🔥 Important
// Disabled controls:
// ❌ Not included in form.value
// ❌ Not validated

// But included in:

// this.myForm.getRawValue(); // includes disabled values