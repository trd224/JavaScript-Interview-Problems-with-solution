// A checkbox in Angular is initialized as checked by setting its FormControl default value to true.

// ✅ Example (Reactive Form)
// TS
// this.form = this.fb.group({
//   agree: [true]   // ✅ checked by default
// });
// HTML
// <input type="checkbox" formControlName="agree">
// ✅ Multiple Checkboxes (FormArray default checked)
// this.skills = ['HTML', 'CSS', 'JS'];

// this.form = this.fb.group({
//   skills: this.fb.array(
//     this.skills.map(skill => this.fb.control(true)) // ✅ all checked
//   )
// });
// ⚡ One-line (your style)

// Checkbox is initialized as checked by setting its FormControl value to true.