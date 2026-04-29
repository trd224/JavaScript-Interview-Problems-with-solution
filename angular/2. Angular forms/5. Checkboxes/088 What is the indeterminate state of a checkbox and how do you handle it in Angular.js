// An indeterminate checkbox is a state where the checkbox is neither fully checked nor unchecked (used when some, but not all, child checkboxes are selected).

// ✅ Key Idea
// checked = true → all selected
// checked = false → none selected
// indeterminate = true → partially selected
// ✅ Example (Select All with Indeterminate)
// TS
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   options = ['HTML', 'CSS', 'JS'];
//   indeterminate = false;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       selectAll: [false],
//       skills: this.fb.array(this.options.map(() => this.fb.control(false)))
//     });
//   }

//   get skillsArray(): FormArray {
//     return this.form.get('skills') as FormArray;
//   }

//   onChildChange() {
//     const values = this.skillsArray.value;

//     const allChecked = values.every(v => v === true);
//     const noneChecked = values.every(v => v === false);

//     this.form.get('selectAll')?.setValue(allChecked, { emitEvent: false });

//     // ✅ handle indeterminate state
//     this.indeterminate = !allChecked && !noneChecked;
//   }

//   onSelectAllChange(event: any) {
//     const checked = event.target.checked;

//     this.skillsArray.controls.forEach(control => {
//       control.setValue(checked);
//     });

//     this.indeterminate = false; // reset
//   }
// }
// HTML
// <!-- Select All -->
// <input 
//   type="checkbox"
//   formControlName="selectAll"
//   [indeterminate]="indeterminate"
//   (change)="onSelectAllChange($event)"
// >
// Select All

// <!-- Child Checkboxes -->
// <div formArrayName="skills">
//   <div *ngFor="let control of skillsArray.controls; let i = index">
//     <input 
//       type="checkbox"
//       [formControlName]="i"
//       (change)="onChildChange()"
//     >
//     {{ options[i] }}
//   </div>
// </div>
// ⚡ One-line (your style)

// Indeterminate state is a partial selection state handled by [indeterminate] property based on child checkbox values.

// 💡 Important
// It’s UI-only state (not stored in FormControl value)
// You must manage it manually in TS