// A ‘Select All’ checkbox is implemented by updating all FormArray controls when the parent checkbox changes, and syncing the parent based on child selections.

// ✅ Example (Reactive Form)
// TS
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   options = ['HTML', 'CSS', 'JS'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       selectAll: [false],
//       skills: this.fb.array(this.options.map(() => this.fb.control(false)))
//     });
//   }

//   get skillsArray(): FormArray {
//     return this.form.get('skills') as FormArray;
//   }

//   // ✅ When "Select All" changes
//   onSelectAllChange(event: any) {
//     const checked = event.target.checked;
//     this.skillsArray.controls.forEach(control => {
//       control.setValue(checked);
//     });
//   }

//   // ✅ When any child checkbox changes
//   onChildChange() {
//     const allChecked = this.skillsArray.controls.every(c => c.value);
//     this.form.get('selectAll')?.setValue(allChecked, { emitEvent: false });
//   }
// }
// HTML
// <form [formGroup]="form">

//   <!-- Select All -->
//   <input 
//     type="checkbox" 
//     formControlName="selectAll"
//     (change)="onSelectAllChange($event)"
//   >
//   Select All

//   <!-- Child Checkboxes -->
//   <div formArrayName="skills">
//     <div *ngFor="let control of skillsArray.controls; let i = index">
//       <input 
//         type="checkbox" 
//         [formControlName]="i"
//         (change)="onChildChange()"
//       >
//       {{ options[i] }}
//     </div>
//   </div>

// </form>
// ⚡ One-line (your style)

// ‘Select All’ checkbox works by setting all FormArray controls to true/false and updating itself based on child checkbox states.

// 💡 Pro Tip (cleaner way)

// Instead of (change), you can use valueChanges in TS for a fully reactive solution (no DOM events).


// { emitEvent: false } is an option used with Angular form methods to prevent triggering valueChanges and statusChanges events.

// ✅ Example
// this.form.get('selectAll')?.setValue(true, { emitEvent: false });

// 👉 This updates the value without firing valueChanges.


// ⚡ Why use it?

// To avoid infinite loops or unnecessary triggers, especially in cases like:

// Select All ↔ Child checkboxes syncing
// Auto-updating values inside valueChanges subscription



// ⚡ One-line (your style)

// { emitEvent: false } updates a form control value without emitting valueChanges events.

// 💡 Without it (problem)
// this.form.get('selectAll')?.setValue(true);

// ➡️ Triggers valueChanges → may cause loop ⚠️