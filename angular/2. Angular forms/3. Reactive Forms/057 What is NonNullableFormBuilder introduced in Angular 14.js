// NonNullableFormBuilder in Angular is a version of FormBuilder that creates form controls with non-nullable values, meaning their value can never be null.

// ✅ Simple Meaning

// We use NonNullableFormBuilder to ensure form values are always defined (not null), improving type safety.

// 🔥 Why it was introduced

// By default, reactive forms allow values like:

// string | null
// This creates extra null checks ❌

// 👉 NonNullableFormBuilder fixes this:

// string   // no null
// ✅ Example
// import { NonNullableFormBuilder } from '@angular/forms';

// constructor(private fb: NonNullableFormBuilder) {}

// myForm = this.fb.group({
//   username: [''],   // always string, never null
//   age: [0]          // always number
// });
// 🔍 Without NonNullableFormBuilder
// username = new FormControl('');

// 👉 Type:

// FormControl<string | null>
// 🔍 With NonNullableFormBuilder
// username = this.fb.control('');

// 👉 Type:

// FormControl<string>


// ⚡ Interview Line

// If we don’t provide initial values, controls lose type safety and may behave like regular nullable controls.
// It does not throw an error, but it breaks "type inference" and removes the non-nullable benefit.