// You can add minlength and maxlength validation to a textarea in Angular in both template-driven and reactive forms.

// ✅ 1. Template-driven form (ngModel)
// 🔹 HTML
// <textarea
//   name="message"
//   [(ngModel)]="message"
//   required
//   minlength="10"
//   maxlength="100"
//   #msg="ngModel">
// </textarea>
// 🔹 Error messages
// <div *ngIf="msg.touched && msg.errors">

//   <p *ngIf="msg.errors?.['required']">Message is required</p>

//   <p *ngIf="msg.errors?.['minlength']">
//     Minimum 10 characters required
//   </p>

//   <p *ngIf="msg.errors?.['maxlength']">
//     Maximum 100 characters allowed
//   </p>

// </div>
// 🚀 2. Reactive Form (Recommended)
// 🔹 TS
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// export class AppComponent {

//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       message: [
//         '',
//         [Validators.required, Validators.minLength(10), Validators.maxLength(100)]
//       ]
//     });
//   }
// }
// 🔹 HTML
// <form [formGroup]="form">

//   <textarea formControlName="message"></textarea>

//   <div *ngIf="form.get('message')?.touched">

//     <p *ngIf="form.get('message')?.errors?.['required']">
//       Message is required
//     </p>

//     <p *ngIf="form.get('message')?.errors?.['minlength']">
//       Minimum 10 characters required
//     </p>

//     <p *ngIf="form.get('message')?.errors?.['maxlength']">
//       Maximum 100 characters allowed
//     </p>

//   </div>

// </form>