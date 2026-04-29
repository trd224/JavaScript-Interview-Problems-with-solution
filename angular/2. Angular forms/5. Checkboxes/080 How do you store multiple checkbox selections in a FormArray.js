// A FormArray in Angular is a dynamic array of FormControls used to store multiple values like checkbox selections.

// ✅ Idea

// Each checkbox is linked to a FormControl inside a FormArray, and when checked/unchecked, values are added/removed from the array.

// ✅ Example
// TS (Component)
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   skills = ['HTML', 'CSS', 'JS'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       skills: this.fb.array([])
//     });
//   }

//   get skillsArray(): FormArray {
//     return this.form.get('skills') as FormArray;
//   }

//   onCheckboxChange(event: any) {
//     if (event.target.checked) {
//       this.skillsArray.push(this.fb.control(event.target.value));
//     } else {
//       const index = this.skillsArray.controls
//         .findIndex(x => x.value === event.target.value);
//       this.skillsArray.removeAt(index);
//     }
//   }
// }
// HTML
// <form [formGroup]="form">
//   <div *ngFor="let skill of skills">
//     <input 
//       type="checkbox" 
//       [value]="skill"
//       (change)="onCheckboxChange($event)"
//     >
//     {{ skill }}
//   </div>
// </form>
// ✅ Output

// If user selects HTML & JS, FormArray value will be:

// ['HTML', 'JS']
// ⚡ Key Point (1 line as you prefer)

// FormArray is used to store multiple checkbox values by dynamically adding/removing FormControls based on user selection.