// A multi-select in Angular returns an array of selected values, and how you access it depends on whether you are using template-driven forms, reactive forms, or native HTML binding.

// ✅ 1. Native <select multiple> (Template-driven / ngModel)
// 🔹 HTML
// <select multiple [(ngModel)]="selectedCities">
//   <option *ngFor="let city of cities" [value]="city">
//     {{ city }}
//   </option>
// </select>
// 🔹 TS
// cities = ['Delhi', 'Mumbai', 'Jaipur'];
// selectedCities: string[] = [];
// ✅ Get selected values

// 👉 Directly available in:

// console.log(this.selectedCities);

// ✔ Angular automatically stores all selected options in an array.

// ✅ 2. Reactive Form Multi-Select
// 🔹 HTML
// <form [formGroup]="form">
//   <select formControlName="cities" multiple>
//     <option *ngFor="let city of cities" [value]="city">
//       {{ city }}
//     </option>
//   </select>
// </form>
// 🔹 TS
// form = this.fb.group({
//   cities: [[]]
// });

// cities = ['Delhi', 'Mumbai', 'Jaipur'];
// ✅ Get selected values
// console.log(this.form.value.cities);

// ✔ This returns an array of selected values

// ✅ 3. Checkbox Multi-Select (Custom Implementation)
// 🔹 HTML
// <div *ngFor="let skill of skills">
//   <input
//     type="checkbox"
//     [value]="skill"
//     (change)="onChange($event)"
//   />
//   {{ skill }}
// </div>
// 🔹 TS
// skills = ['Angular', 'React', 'Node'];
// selectedSkills: string[] = [];

// onChange(event: any) {
//   const value = event.target.value;

//   if (event.target.checked) {
//     this.selectedSkills.push(value);
//   } else {
//     this.selectedSkills = this.selectedSkills.filter(v => v !== value);
//   }

//   console.log(this.selectedSkills);
// }

// 🚀 4. Angular Material Multi-Select
// 🔹 HTML
// <mat-select multiple [(value)]="selectedSkills">
//   <mat-option *ngFor="let skill of skills" [value]="skill">
//     {{ skill }}
//   </mat-option>
// </mat-select>
// 🔹 TS
// selectedSkills: string[] = [];
// ✅ Get values
// console.log(this.selectedSkills);