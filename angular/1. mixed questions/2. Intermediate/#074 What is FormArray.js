// 🔹 What is FormArray in Angular?

// 👉 FormArray is a class in Angular used to manage a dynamic list of form controls or form groups.


// 🔹 Why Use FormArray?
// Handle dynamic fields
// Add/remove inputs at runtime
// Manage lists (like skills, items)


// 🔹 Example

// Component

// import { FormArray, FormControl, FormGroup } from '@angular/forms';

// form = new FormGroup({
//   skills: new FormArray([
//     new FormControl('')
//   ])
// });

// get skills() {
//   return this.form.get('skills') as FormArray;
// }

// addSkill() {
//   this.skills.push(new FormControl(''));
// }


// Template

// <div formArrayName="skills">
//   <div *ngFor="let skill of skills.controls; let i = index">
//     <input [formControlName]="i">
//   </div>
// </div>

// <button (click)="addSkill()">Add Skill</button>


// 🔹 Key Points
// Used for dynamic forms
// Stores multiple controls in array form
// Works with reactive forms