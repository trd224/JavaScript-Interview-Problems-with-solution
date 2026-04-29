// FormControl in Angular is a class that represents a single form input, managing its value, validation, and state.

// ✅ Simple Meaning

// We use FormControl to control one input field in a reactive form.

// ✅ Example

// import { FormControl } from '@angular/forms';

// username = new FormControl('John');
// <input [formControl]="username">

// 🔥 What it manages
// value → current value
// valid / invalid → validation status
// touched / dirty → user interaction
// errors → validation errors

// ✅ With Validation
// import { Validators } from '@angular/forms';

// username = new FormControl('', [Validators.required]);



// ⚡ Interview Line

// FormControl is the basic building block of reactive forms that tracks the value and validation state of an individual form field.