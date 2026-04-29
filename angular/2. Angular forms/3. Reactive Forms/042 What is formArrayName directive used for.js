// formArrayName in Angular is a directive used to bind a FormArray from the component to a section of the template.

// ✅ Simple Meaning

// We use formArrayName when we have a list of controls (dynamic fields) inside a form.

// ✅ Example

// Component

// import { FormGroup, FormArray, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   skills: new FormArray([
//     new FormControl('Angular'),
//     new FormControl('React')
//   ])
// });

// Template

// <form [formGroup]="myForm">

//   <div formArrayName="skills">
//     <div *ngFor="let skill of myForm.get('skills').controls; let i = index">
//       <input [formControlName]="i">
//     </div>
//   </div>

// </form>

// 🔥 How it works
// formArrayName="skills"
// 👉 connects to myForm.controls.skills
// [formControlName]="i"
// 👉 binds each control using index

// ✅ Add control dynamically
// (this.myForm.get('skills') as any).push(new FormControl('Vue'));


// ⚡ Output
// ["Angular", "React", "Vue"]