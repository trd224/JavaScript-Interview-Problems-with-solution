// We add and remove controls dynamically in a FormGroup in Angular using addControl() and removeControl() methods.

// ✅ Component (TS)

// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl('')
// });

// showEmail = false;

// addEmail() {
//   this.myForm.addControl('email', new FormControl(''));
//   this.showEmail = true;
// }

// removeEmail() {
//   this.myForm.removeControl('email');
//   this.showEmail = false;
// }


// ✅ Template (HTML)

// <form [formGroup]="myForm">

//   <input formControlName="username">

//   <!-- show only if control exists -->
//   <input *ngIf="showEmail" formControlName="email">

//   <button type="button" (click)="addEmail()">Add Email</button>
//   <button type="button" (click)="removeEmail()">Remove Email</button>

// </form>

// 🔥 Important
// Angular will throw error ❌ if:
// formControlName="email" exists in HTML
// but control is NOT present in FormGroup

// 👉 That’s why we use *ngIf



// ⚡ Alternative (safer check)
// <input *ngIf="myForm.get('email')" formControlName="email">