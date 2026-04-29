// ✅ One-line definition

// A single checkbox with ngModel binds to a boolean value (true/false) representing its checked state.

// ✅ Basic Example

// HTML

// <input type="checkbox" [(ngModel)]="isChecked">

// TS

// isChecked = false;

// 👉 Checked → isChecked = true
// 👉 Unchecked → isChecked = false

// ✅ Inside a form (name required)

// <form #f="ngForm">
//   <input type="checkbox" name="agree" [(ngModel)]="isChecked">
// </form>

// ✅ Custom values

// <input 
//   type="checkbox" 
//   [(ngModel)]="status" 
//   [trueValue]="'YES'" 
//   [falseValue]="'NO'"
// >
// status = 'NO';

// 👉 Checked → 'YES'
// 👉 Unchecked → 'NO'





// ✅ Full Example (Input + Checkbox)

// HTML

// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <!-- Text Input -->
//   <label>Name:</label>
//   <input 
//     type="text" 
//     name="username" 
//     [(ngModel)]="user.name" 
//     required
//   >

//   <br><br>

//   <!-- Checkbox -->
//   <label>
//     <input 
//       type="checkbox" 
//       name="agree" 
//       [(ngModel)]="user.agree"
//     >
//     Accept Terms
//   </label>

//   <br><br>

//   <button type="submit">Submit</button>

// </form>

// TS

// user = {
//   name: '',
//   agree: false
// };

// onSubmit(form: any) {
//   console.log('Form Value:', form.value);
//   console.log('User Model:', this.user);
// }






// ✅ 1. Using only ngModel (NO variable binding)

// <form #f="ngForm">
//   <input type="text" name="username" ngModel>
// </form>

// 👉 Use when:

// You only need value at submit time
// You don’t need a TS variable

// TS

// onSubmit(form: any) {
//   console.log(form.value.username);
// }

// ✔ Value comes from form.value
// ❌ No direct variable like this.username