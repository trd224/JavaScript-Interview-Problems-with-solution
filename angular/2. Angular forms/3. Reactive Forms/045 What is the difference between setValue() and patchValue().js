// setValue() and patchValue() in Angular are used to update form values, but they differ in how strictly they require the form structure.


// 🔥 Core Difference

// | Feature          | `setValue()`          | `patchValue()`             |
// | ---------------- | --------------------- | -------------------------- |
// | Fields required  | ✅ All fields required | ❌ Only some fields allowed |
// | Structure match  | Must match exactly    | Can be partial             |
// | Error on missing | ❌ Yes (throws error)  | ✅ No error                 |
// | Use case         | Full form update      | Partial update             |


// ✅ Example
// Using setValue()
// this.myForm.setValue({
//   username: 'John',
//   email: 'john@gmail.com'
// });

// ❌ This will fail if any field is missing

// Using patchValue()
// this.myForm.patchValue({
//   username: 'John'
// });

// ✅ Updates only username, ignores others

// 🔍 Nested Example
// this.myForm.patchValue({
//   address: {
//     city: 'Delhi'
//   }
// });

// 👉 Only updates city, keeps other fields unchanged