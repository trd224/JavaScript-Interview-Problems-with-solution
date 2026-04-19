// 🔹 What is Cross-Field Validation in Angular?

// 👉 Cross-field validation is used to validate multiple form fields together based on a condition.


// 🔹 Why Use It
// Validate related fields
// Apply business rules
// Compare values between fields


// 🔹 Example (Password Match)

// Validator

// import { AbstractControl } from '@angular/forms';

// export function passwordMatchValidator(group: AbstractControl) {
//   const password = group.get('password')?.value;
//   const confirm = group.get('confirmPassword')?.value;

//   return password === confirm ? null : { notMatch: true };
// }


// Form

// import { FormGroup, FormControl } from '@angular/forms';

// form = new FormGroup({
//   password: new FormControl(''),
//   confirmPassword: new FormControl('')
// }, { validators: passwordMatchValidator });


// Template

// <p *ngIf="form.errors?.notMatch">
//   Passwords do not match
// </p>


// 🔹 Key Points
// Applied on FormGroup
// Validates multiple fields together
// Returns error object or null