// FormGroup in Angular is a class that groups multiple FormControl instances into a single object, allowing us to manage the entire form as one unit.


// ✅ Simple Meaning

// We use FormGroup to represent a form with multiple fields.


// ✅ Example
// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl(''),
//   email: new FormControl('')
// });

// <form [formGroup]="myForm">
//   <input formControlName="username">
//   <input formControlName="email">
// </form>


// 🔥 What it manages
// value → object of all form values
// valid / invalid → overall form status
// controls → all child controls
// touched / dirty → form state

// ⚡ Example Output
// {
//   "username": "John",
//   "email": "test@gmail.com"
// }