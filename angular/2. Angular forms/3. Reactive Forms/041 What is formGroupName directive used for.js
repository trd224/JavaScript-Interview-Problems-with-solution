// formGroupName in Angular is a directive used to bind a nested FormGroup inside a parent FormGroup to a section of the template.

// ✅ Simple Meaning

// We use formGroupName when we have a FormGroup inside another FormGroup.

// ✅ Example

// Component

// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl(''),
//   address: new FormGroup({
//     city: new FormControl(''),
//     pincode: new FormControl('')
//   })
// });

// Template

// <form [formGroup]="myForm">

//   <input formControlName="username">

//   <div formGroupName="address">
//     <input formControlName="city">
//     <input formControlName="pincode">
//   </div>

// </form>



// 🔥 How it works
// formGroupName="address"
// 👉 connects this section to myForm.controls.address
// Inner formControlName works relative to this group


// ⚡ Output
// {
//   "username": "John",
//   "address": {
//     "city": "Delhi",
//     "pincode": "110001"
//   }
// }