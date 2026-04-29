// A checkbox with ngModelGroup in template-driven forms is used to group multiple checkboxes under one object in the form.

// ✅ HTML (Complete)
// <form #form="ngForm" (ngSubmit)="onSubmit(form)">

//   <!-- Group -->
//   <div ngModelGroup="skills" #skillsGroup="ngModelGroup">

//     <label>
//       <input 
//         type="checkbox" 
//         name="html" 
//         ngModel 
//         (change)="onCheckboxChange(skillsGroup)"
//       >
//       HTML
//     </label>

//     <label>
//       <input 
//         type="checkbox" 
//         name="css" 
//         ngModel 
//         (change)="onCheckboxChange(skillsGroup)"
//       >
//       CSS
//     </label>

//     <label>
//       <input 
//         type="checkbox" 
//         name="js" 
//         ngModel 
//         (change)="onCheckboxChange(skillsGroup)"
//       >
//       JS
//     </label>

//   </div>

//   <!-- Validation Error -->
//   <div *ngIf="skillsError" style="color:red;">
//     At least one skill must be selected
//   </div>

//   <button type="submit">Submit</button>

// </form>
// ✅ TS (Component)
// export class AppComponent {
//   skillsError = false;

//   onCheckboxChange(group: any) {
//     const values = group.value;

//     // check if at least one is true
//     this.skillsError = !Object.values(values).some(v => v === true);
//   }

//   onSubmit(form: any) {
//     const skills = form.value.skills;

//     // final validation check
//     this.skillsError = !Object.values(skills).some(v => v === true);

//     if (!this.skillsError) {
//       console.log(form.value);
//     }
//   }
// }
// ✅ Output
// {
//   skills: {
//     html: true,
//     css: false,
//     js: true
//   }
// }
// ⚡ One-line (your style)

// In template-driven forms, ngModelGroup groups checkboxes into an object and validation is handled manually by checking if at least one value is true.

// 💡 Key Points
// ngModelGroup → creates object (skills)
// Each checkbox → name + ngModel
// Validation → manual (no built-in validator for group)