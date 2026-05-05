// A character count for a textarea in Angular is a way to display how many characters the user has typed, usually using the length of the bound value.

// ✅ Template-driven form example
// <textarea [(ngModel)]="message" name="msg"></textarea>

// <p>Characters: {{ message?.length || 0 }}</p>
// export class AppComponent {
//   message: string = '';
// }

// 👉 Explanation:

// [(ngModel)]="message" binds textarea value
// message.length shows character count
// || 0 prevents error when empty
// ✅ Reactive form example
// <form [formGroup]="form">
//   <textarea formControlName="message"></textarea>

//   <p>Characters: {{ form.get('message')?.value?.length || 0 }}</p>
// </form>
// import { FormGroup, FormControl } from '@angular/forms';

// export class AppComponent {
//   form = new FormGroup({
//     message: new FormControl('')
//   });
// }

// 👉 Explanation:

// formControlName="message" binds textarea
// value.length gives current character count
// ✅ With max length display (common in real apps)
// <textarea [(ngModel)]="message" maxlength="100"></textarea>

// <p>{{ message.length }}/100</p>