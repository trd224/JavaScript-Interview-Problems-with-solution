// A FormArray is used to dynamically create a checkbox list by generating a FormControl for each option in an array.

// ✅ Example (Dynamic Checkboxes)
// TS
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   options = ['HTML', 'CSS', 'JS'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       skills: this.fb.array(
//         this.options.map(() => this.fb.control(false)) // one control per checkbox
//       )
//     });
//   }

//   get skillsArray(): FormArray {
//     return this.form.get('skills') as FormArray;
//   }

//   onSubmit() {
//     const selected = this.skillsArray.value
//       .map((checked: boolean, i: number) => checked ? this.options[i] : null)
//       .filter(v => v !== null);

//     console.log(selected); // ['HTML', 'JS']
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">
//   <div formArrayName="skills">
//     <div *ngFor="let control of skillsArray.controls; let i = index">
//       <input type="checkbox" [formControlName]="i">
//       {{ options[i] }}
//     </div>
//   </div>

//   <button type="submit">Submit</button>
// </form>
// ⚡ One-line (your style)

// Dynamic checkboxes are created using FormArray by mapping options into FormControls and binding them with index-based formControlName.