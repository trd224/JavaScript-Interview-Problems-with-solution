// In Angular, you disable a specific dropdown option by using the native HTML attribute [disabled] on the <option> (or <mat-option> if using Angular Material).

// ✅ 1. Native <select> Dropdown
// 🔹 HTML
// <select [(ngModel)]="selectedCity">
//   <option *ngFor="let city of cities"
//           [value]="city.name"
//           [disabled]="city.disabled">
//     {{ city.name }}
//   </option>
// </select>
// 🔹 TS
// cities = [
//   { name: 'Delhi', disabled: false },
//   { name: 'Mumbai', disabled: true },
//   { name: 'Jaipur', disabled: false }
// ];

// selectedCity = '';

// 👉 Here Mumbai is disabled

// ✅ 2. Reactive Form Dropdown
// 🔹 HTML
// <form [formGroup]="form">
//   <select formControlName="city">
//     <option *ngFor="let city of cities"
//             [value]="city.name"
//             [disabled]="city.disabled">
//       {{ city.name }}
//     </option>
//   </select>
// </form>
// 🔹 TS
// form = this.fb.group({
//   city: ['']
// });

// cities = [
//   { name: 'Delhi', disabled: false },
//   { name: 'Mumbai', disabled: true },
//   { name: 'Jaipur', disabled: false }
// ];
// ✅ 3. Angular Material Dropdown (Best UI Way)
// 🔹 HTML
// <mat-form-field>
//   <mat-select placeholder="Select City">
//     <mat-option *ngFor="let city of cities"
//                 [value]="city.name"
//                 [disabled]="city.disabled">
//       {{ city.name }}
//     </mat-option>
//   </mat-select>
// </mat-form-field>
// 🔹 TS
// cities = [
//   { name: 'Delhi', disabled: false },
//   { name: 'Mumbai', disabled: true },
//   { name: 'Jaipur', disabled: false }
// ];
// 🚀 4. Dynamic Disable (Based on Condition)
// <option *ngFor="let city of cities"
//         [value]="city.name"
//         [disabled]="city.name === 'Mumbai'">
//   {{ city.name }}
// </option>

// 💡 Summary

// 👉 You disable options using:

// Native HTML → [disabled]="condition"
// Angular Material → [disabled]="condition"
// Works in both template-driven and reactive forms