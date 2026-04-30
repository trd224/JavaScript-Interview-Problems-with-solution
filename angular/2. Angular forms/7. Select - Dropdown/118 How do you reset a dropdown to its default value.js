// In Angular, resetting a dropdown to its default value means setting the form control (or model) back to a predefined value like "Select Country" or null.

// ✅ 1. Template-driven (ngModel)
// 🔹 HTML
// <select [(ngModel)]="selectedCountry">
//   <option value="">-- Select Country --</option>
//   <option *ngFor="let c of countries" [value]="c">
//     {{ c }}
//   </option>
// </select>

// <button (click)="resetDropdown()">Reset</button>
// 🔹 TS
// countries = ['India', 'USA', 'UK'];
// selectedCountry = '';

// resetDropdown() {
//   this.selectedCountry = '';
// }

// 👉 Setting '' brings it back to default placeholder.

// ✅ 2. Reactive Forms (Recommended)
// 🔹 HTML
// <form [formGroup]="form">
//   <select formControlName="country">
//     <option value="">-- Select Country --</option>
//     <option *ngFor="let c of countries" [value]="c">
//       {{ c }}
//     </option>
//   </select>

//   <button type="button" (click)="reset()">Reset</button>
// </form>
// 🔹 TS
// form = this.fb.group({
//   country: ['']
// });

// countries = ['India', 'USA', 'UK'];

// reset() {
//   this.form.patchValue({
//     country: ''
//   });
// }
// 🚀 3. Full Form Reset

// If you want to reset everything:

// this.form.reset();

// Or with default values:

// this.form.reset({
//   country: ''
// });
// 💡 4. Reset with Default Selected Value

// If you want a specific default value:

// this.form.patchValue({
//   country: 'India'
// });


// 🎯 Simple Rule

// | Goal               | Code                               |
// | ------------------ | ---------------------------------- |
// | Clear dropdown     | `setValue('')`                     |
// | Reset form         | `reset()`                          |
// | Set default option | `patchValue({ country: 'India' })` |
