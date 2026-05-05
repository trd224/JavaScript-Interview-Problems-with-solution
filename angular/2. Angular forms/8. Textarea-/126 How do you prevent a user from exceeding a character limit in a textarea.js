// Preventing a user from exceeding a character limit in a textarea in Angular means restricting input using HTML attributes or Angular validators so the user cannot type beyond the allowed length.

// ✅ 1. Using maxlength (simplest way)
// <textarea [(ngModel)]="message" maxlength="100"></textarea>

// <p>{{ message?.length || 0 }}/100</p>

// 👉 Example:
// User cannot type more than 100 characters — browser blocks extra input automatically.

// ✅ 2. Reactive Form with Validators
// <form [formGroup]="form">
//   <textarea formControlName="message"></textarea>

//   <p>{{ form.get('message')?.value?.length || 0 }}/100</p>

//   <p *ngIf="form.get('message')?.errors?.['maxlength']">
//     Max 100 characters allowed
//   </p>
// </form>
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// export class AppComponent {
//   form = new FormGroup({
//     message: new FormControl('', [Validators.maxLength(100)])
//   });
// }

// 👉 Example:

// Validation triggers if user exceeds 100 chars
// You can show error message
// ✅ 3. Hard restriction from TypeScript (extra safety)
// <textarea [(ngModel)]="message" (input)="limitText()"></textarea>
// <p>{{ message.length }}/100</p>
// export class AppComponent {
//   message = '';

//   limitText() {
//     if (this.message.length > 100) {
//       this.message = this.message.substring(0, 100);
//     }
//   }
// }

// 👉 Example:
// Even if user pastes long text, it gets trimmed to 100 characters.