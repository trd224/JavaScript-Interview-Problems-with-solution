// 🔹 What is FormBuilder in Angular?

// 👉 FormBuilder is a service in Angular used to quickly create reactive forms like FormGroup, FormControl, and FormArray with less code.


// 🔹 Why Use FormBuilder?
// Reduces boilerplate code
// Cleaner and faster form creation
// Improves readability


// 🔹 Example (Without FormBuilder ❌)

// import { FormGroup, FormControl } from '@angular/forms';

// form = new FormGroup({
//   name: new FormControl(''),
//   email: new FormControl('')
// });


// 🔹 Example (With FormBuilder ✅)

// import { FormBuilder } from '@angular/forms';

// constructor(private fb: FormBuilder) {}

// form = this.fb.group({
//   name: [''],
//   email: ['']
// });


// 🔹 With Validation

// form = this.fb.group({
//   name: ['', Validators.required],
//   email: ['', [Validators.required, Validators.email]]
// });