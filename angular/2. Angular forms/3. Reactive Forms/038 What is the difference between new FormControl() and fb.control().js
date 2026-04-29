// new FormControl() and fb.control() in Angular both create a FormControl, but fb.control() is a shorthand provided by FormBuilder for cleaner and more concise code.

// 🔥 Core Difference

// | Feature          | `new FormControl()` | `fb.control()`          |
// | ---------------- | ------------------- | ----------------------- |
// | Type             | Class constructor   | FormBuilder method      |
// | Code length      | More verbose        | Short and clean         |
// | Usage            | Direct creation     | Used with `FormBuilder` |
// | Injection needed | ❌ No                | ✅ Yes (`FormBuilder`)   |



// ✅ Example

// Using new FormControl()

// import { FormControl, Validators } from '@angular/forms';

// username = new FormControl('', Validators.required);

// Using fb.control()

// import { FormBuilder, Validators } from '@angular/forms';

// constructor(private fb: FormBuilder) {}

// username = this.fb.control('', Validators.required);



// 🔍 Internally

// 👉 Both do the same thing
// 👉 fb.control() just calls new FormControl() internally


// ⚡ When to use what
// Use new FormControl() → simple or standalone control
// Use fb.control() → when using FormBuilder for full form