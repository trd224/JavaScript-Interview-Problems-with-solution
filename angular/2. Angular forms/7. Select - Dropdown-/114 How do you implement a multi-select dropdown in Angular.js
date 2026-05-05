// A multi-select dropdown in Angular is a UI control that allows selecting multiple values from a list using either template-driven forms or reactive forms, usually with checkboxes or a <select multiple> element.

// ✅ 1. Simple Native Multi-Select (Reactive or Template-driven)
// 🔹 HTML
// <select multiple [(ngModel)]="selectedCities">
//   <option *ngFor="let city of cities" [value]="city">
//     {{ city }}
//   </option>
// </select>
// 🔹 TS
// cities: string[] = ['Delhi', 'Mumbai', 'Jaipur', 'Kota'];
// selectedCities: string[] = [];

// 👉 This is the simplest approach but not very stylish.

// ✅ 2. Multi-Select Using Checkboxes (Most Used in Real Apps)
// 🔹 HTML
// <div *ngFor="let skill of skills">
//   <label>
//     <input
//       type="checkbox"
//       [value]="skill"
//       (change)="onCheckboxChange($event)"
//     />
//     {{ skill }}
//   </label>
// </div>
// 🔹 TS
// skills: string[] = ['Angular', 'React', 'Node', 'MongoDB'];
// selectedSkills: string[] = [];

// onCheckboxChange(event: any) {
//   const value = event.target.value;

//   if (event.target.checked) {
//     this.selectedSkills.push(value);
//   } else {
//     this.selectedSkills = this.selectedSkills.filter(v => v !== value);
//   }
// }

// 👉 Best for full control and custom UI.

// ✅ 3. Reactive Form Multi-Select (Professional Way)
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

// cities = ['Delhi', 'Mumbai', 'Jaipur', 'Kota'];
// 🚀 4. Angular Material Multi-Select (BEST UI)

// If you want modern dropdown UI, use Angular Material.

// Install:
// ng add @angular/material
// HTML:
// <mat-form-field>
//   <mat-select placeholder="Select Skills" multiple [(value)]="selectedSkills">
//     <mat-option *ngFor="let skill of skills" [value]="skill">
//       {{ skill }}
//     </mat-option>
//   </mat-select>
// </mat-form-field>
// TS:
// skills = ['Angular', 'React', 'Node', 'MongoDB'];
// selectedSkills: string[] = [];

// 👉 This gives beautiful UI + search + chips support

// 💡 Best Choice (Simple guide)
// 🟢 Basic project → <select multiple>
// 🟢 Custom UI → checkboxes
// 🟢 Real project → Reactive forms
// 🟢 Best UI → Angular Material mat-select multiple