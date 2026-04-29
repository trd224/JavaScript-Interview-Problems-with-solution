// A radio button in a reactive form is bound using a single FormControl with the same formControlName and different value for each option.

// ✅ Example (Reactive Form)
// TS
// import { FormBuilder, FormGroup } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       gender: ['male'] // ✅ default selected
//     });
//   }
// }
// HTML
// <form [formGroup]="form">

//   <label>
//     <input type="radio" formControlName="gender" value="male"> Male
//   </label>

//   <label>
//     <input type="radio" formControlName="gender" value="female"> Female
//   </label>

//   <label>
//     <input type="radio" formControlName="gender" value="other"> Other
//   </label>

// </form>
// ✅ Output
// {
//   gender: 'male'
// }
// ⚡ One-line (your style)

// Radio buttons in reactive forms use one FormControl with same formControlName and different value options.

// 💡 Key Points
// Same formControlName → group behavior
// value decides selected option
// Default → set in TS