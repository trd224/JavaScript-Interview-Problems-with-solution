// ✅ One-line definition

// A group of checkboxes in Angular is handled using an array (for selected values) or a FormArray (in Reactive Forms) to track multiple selections.

// ✅ 1. Template-Driven Form (Array approach)
// HTML
// <form #f="ngForm" (ngSubmit)="onSubmit(f)">

//   <label *ngFor="let skill of skills">
//     <input 
//       type="checkbox"
//       name="skills"
//       [value]="skill"
//       (change)="onCheckboxChange($event)"
//     >
//     {{ skill }}
//   </label>

//   <br><br>
//   <button type="submit">Submit</button>

// </form>
// TS
// skills = ['HTML', 'CSS', 'JS'];
// selectedSkills: string[] = [];

// onCheckboxChange(event: any) {
//   const value = event.target.value;

//   if (event.target.checked) {
//     this.selectedSkills.push(value);
//   } else {
//     this.selectedSkills = this.selectedSkills.filter(v => v !== value);
//   }
// }

// onSubmit(form: any) {
//   console.log('Selected Skills:', this.selectedSkills);
// }

// 🔍 Result

// ['HTML', 'JS']



// ✅ 2. Reactive Form (FormArray approach)

//  TS 

// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// export class AppComponent {
//   form: FormGroup;
//   skills = ['Angular', 'React', 'Vue'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       skills: this.fb.array([]) // FormArray for checkboxes
//     });
//   }

//   get skillsArray() {
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

// <p>Selected: {{ form.value | json }}</p>

// 🔍 Result

// {
//   "skills": ["Angular", "Vue"]
// }

// or

// TS

// import { FormGroup, FormArray, FormControl } from '@angular/forms';

// skills = ['HTML', 'CSS', 'JS'];

// myForm = new FormGroup({
//   skills: new FormArray([])
// });

// onCheckboxChange(event: any) {
//   const formArray = this.myForm.get('skills') as FormArray;

//   if (event.target.checked) {
//     formArray.push(new FormControl(event.target.value));
//   } else {
//     const index = formArray.controls.findIndex(
//       x => x.value === event.target.value
//     );
//     formArray.removeAt(index);
//   }
// }

// onSubmit() {
//   console.log(this.myForm.value);
// }

// HTML

// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <label *ngFor="let skill of skills">
//     <input 
//       type="checkbox"
//       [value]="skill"
//       (change)="onCheckboxChange($event)"
//     >
//     {{ skill }}
//   </label>

//   <br><br>
//   <button type="submit">Submit</button>

// </form>
// 🔍 Result

// // Reactive form
// { skills: ['HTML', 'JS'] }