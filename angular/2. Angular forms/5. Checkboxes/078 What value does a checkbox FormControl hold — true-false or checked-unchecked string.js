// ✅ One-line answer

// A checkbox FormControl in Angular holds a boolean value: true (checked) or false (unchecked).

// 🔍 Example

// TS

// myForm = new FormGroup({
//   agree: new FormControl(false)
// });

// HTML

// <input type="checkbox" formControlName="agree">

// ✅ Result
// Checked → true
// Unchecked → false
// console.log(this.myForm.value);
// // { agree: true }  OR  { agree: false }

// ⚠️ Important clarification
// ❌ Not "checked" / "unchecked"
// ❌ Not "on" / "off" (default HTML behavior is overridden by Angular forms)
// ✅ Always boolean in Reactive Forms