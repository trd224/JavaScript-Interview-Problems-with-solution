// FormBuilder in Angular is a service that provides a shorter and cleaner way to create FormGroup, FormControl, and FormArray in reactive forms.


// ✅ Why we use it

// Without FormBuilder, form creation becomes verbose and repetitive.
// FormBuilder helps us write less code and cleaner structure.

// ❌ Without FormBuilder

// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });


// ✅ With FormBuilder

// import { FormBuilder } from '@angular/forms';

// constructor(private fb: FormBuilder) {}

// myForm = this.fb.group({
//   username: [''],
//   email: ['']
// });


// 🔥 With Validation

// import { Validators } from '@angular/forms';

// myForm = this.fb.group({
//   username: ['', Validators.required],
//   email: ['', [Validators.required, Validators.email]]
// });



// 🔍 What it provides
// fb.group() → creates FormGroup
// fb.control() → creates FormControl
// fb.array() → creates FormArray





// fb.control() and fb.array() in Angular are used to create FormControl and FormArray in a shorter way using FormBuilder.

// ✅ Example: fb.control()

// import { FormBuilder, Validators } from '@angular/forms';

// constructor(private fb: FormBuilder) {}

// username = this.fb.control('John', Validators.required);

// 👉 Same as:

// username = new FormControl('John', Validators.required);

// ✅ Example: fb.array()

// skills = this.fb.array([
//   this.fb.control('Angular'),
//   this.fb.control('React')
// ]);

// ✅ Using inside FormGroup (real use)

// myForm = this.fb.group({
//   username: this.fb.control(''),
//   skills: this.fb.array([
//     this.fb.control('Angular'),
//     this.fb.control('React')
//   ])
// });

// 🔥 Add item dynamically
// (this.myForm.get('skills') as any).push(this.fb.control('Vue'));