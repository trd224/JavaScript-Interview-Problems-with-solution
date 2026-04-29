// To validate that at least one checkbox is selected, you check if any value is true in the group (FormArray or object).

// ✅ Reactive Form (FormArray approach)
// TS
// import { FormBuilder, FormGroup, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   options = ['HTML', 'CSS', 'JS'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       skills: this.fb.array(
//         this.options.map(() => this.fb.control(false)),
//         this.atLeastOneCheckedValidator() // ✅ custom validator
//       )
//     });
//   }

//   get skillsArray(): FormArray {
//     return this.form.get('skills') as FormArray;
//   }

//   // ✅ Custom Validator
//   atLeastOneCheckedValidator(): ValidatorFn {
//     return (control: AbstractControl) => {
//       const values = control.value;
//       const hasOneSelected = values.some((v: boolean) => v === true);
//       return hasOneSelected ? null : { required: true };
//     };
//   }
// }
// HTML
// <div formArrayName="skills">
//   <div *ngFor="let control of skillsArray.controls; let i = index">
//     <input type="checkbox" [formControlName]="i">
//     {{ options[i] }}
//   </div>
// </div>

// <div *ngIf="skillsArray.errors?.['required'] && skillsArray.touched">
//   At least one skill must be selected
// </div>
// ✅ Template-driven (simple check)
// Object.values(form.value.skills).some(v => v === true);
// ⚡ One-line (your style)

// At least one checkbox validation is done using a custom validator that checks if any value in the group/FormArray is true.

// 💡 Tip
// Reactive → use custom validator (best)
// Template-driven → manual check