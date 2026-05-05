// Conditional form sections are implemented by listening to the radio value and showing/hiding parts of the form using *ngIf (and optionally enabling/disabling controls).

// ✅ Reactive Form Example
// TS
// this.form = this.fb.group({
//   userType: ['individual'],   // radio
//   companyName: ['']           // shown only for company
// });

// // optional: react to changes
// this.form.get('userType')?.valueChanges.subscribe(value => {
//   if (value === 'company') {
//     this.form.get('companyName')?.enable();
//   } else {
//     this.form.get('companyName')?.reset();
//     this.form.get('companyName')?.disable();
//   }
// });
// HTML
// <form [formGroup]="form">

//   <!-- Radio -->
//   <label><input type="radio" formControlName="userType" value="individual"> Individual</label>
//   <label><input type="radio" formControlName="userType" value="company"> Company</label>

//   <!-- Conditional Section -->
//   <div *ngIf="form.get('userType')?.value === 'company'">
//     <input type="text" formControlName="companyName" placeholder="Company Name">
//   </div>

// </form>
// ✅ Template-driven Example
// <label><input type="radio" name="type" value="individual" [(ngModel)]="type"> Individual</label>
// <label><input type="radio" name="type" value="company" [(ngModel)]="type"> Company</label>

// <div *ngIf="type === 'company'">
//   <input type="text" [(ngModel)]="companyName" name="companyName">
// </div>
// ⚡ One-line (your style)

// Conditional form sections are shown/hidden using *ngIf based on radio button value, with optional control enable/disable in TS.

// 💡 Best Practice
// Hide UI → *ngIf
// Control form state → enable() / disable()
// Reset unused fields → reset()