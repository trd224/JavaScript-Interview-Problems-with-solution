// Radio buttons can be dynamically rendered by looping over an array and binding each option’s value to the same control.

// ✅ Reactive Form (Dynamic Radio)
// TS
// options = ['Male', 'Female', 'Other'];

// this.form = this.fb.group({
//   gender: ['Male'] // default
// });
// HTML
// <form [formGroup]="form">
//   <label *ngFor="let option of options">
//     <input 
//       type="radio" 
//       formControlName="gender" 
//       [value]="option"
//     >
//     {{ option }}
//   </label>
// </form>
// ✅ Template-driven Form (Dynamic Radio)
// <label *ngFor="let option of options">
//   <input 
//     type="radio" 
//     name="gender" 
//     [value]="option" 
//     ngModel
//   >
//   {{ option }}
// </label>
// ⚡ One-line (your style)

// Dynamic radio buttons are created using *ngFor with the same control and binding each option via [value].

// 💡 Key Point
// Same formControlName / name → grouped
// [value]="option" → dynamic binding