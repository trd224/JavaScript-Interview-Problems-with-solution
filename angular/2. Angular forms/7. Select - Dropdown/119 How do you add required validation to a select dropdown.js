// You add required validation to a select dropdown in Angular using either template-driven forms or reactive forms.

// ✅ 1. Template-driven Form (ngModel)
// 🔹 HTML
// <form #f="ngForm" (ngSubmit)="submit(f)">
  
//   <select name="country" [(ngModel)]="selectedCountry" required #country="ngModel">
//     <option value="">-- Select Country --</option>
//     <option *ngFor="let c of countries" [value]="c">
//       {{ c }}
//     </option>
//   </select>

//   <!-- Error message -->
//   <div *ngIf="country.invalid && country.touched">
//     Country is required
//   </div>

//   <button type="submit">Submit</button>
// </form>
// 🔹 TS
// countries = ['India', 'USA', 'UK'];
// selectedCountry = '';
// ✅ 2. Reactive Form (Recommended)
// 🔹 HTML
// <form [formGroup]="form" (ngSubmit)="submit()">

//   <select formControlName="country">
//     <option value="">-- Select Country --</option>
//     <option *ngFor="let c of countries" [value]="c">
//       {{ c }}
//     </option>
//   </select>

//   <!-- Error message -->
//   <div *ngIf="form.get('country')?.invalid && form.get('country')?.touched">
//     Country is required
//   </div>

//   <button type="submit">Submit</button>
// </form>
// 🔹 TS
// form = this.fb.group({
//   country: ['', Validators.required]
// });

// countries = ['India', 'USA', 'UK'];

// submit() {
//   if (this.form.invalid) {
//     this.form.markAllAsTouched();
//     return;
//   }

//   console.log(this.form.value);
// }
// 🚀 3. What is happening?

// 👉 Validators.required ensures:

// user must select a value
// empty ('') is considered invalid
// 💡 4. Important Trick (VERY USED)

// Make sure your default option is empty:

// <option value="">-- Select --</option>

// If you use "Select" or any text, Angular will treat it as valid.


// 🧠 Summary

// | Approach        | Validation               |
// | --------------- | ------------------------ |
// | Template-driven | `required` attribute     |
// | Reactive form   | `Validators.required`    |
// | Default option  | `value=""` must be empty |
