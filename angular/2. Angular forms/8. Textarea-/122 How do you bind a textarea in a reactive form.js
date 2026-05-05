// In a reactive form, you bind a <textarea> using formControlName, which connects the textarea to a FormControl defined in your TypeScript file.

// 💡 What is textarea binding (Reactive Form)?

// 👉 It means: textarea value is controlled by Angular FormControl, not by HTML alone.

// ✅ 1. Basic Example
// 🔹 TS (Component)
// import { FormGroup, FormBuilder } from '@angular/forms';

// export class AppComponent {

//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       message: ['']
//     });
//   }
// }
// 🔹 HTML
// <form [formGroup]="form">

//   <label>Message:</label>

//   <textarea formControlName="message" rows="5"></textarea>

//   <p>Preview: {{ form.value.message }}</p>

// </form>
// 🧠 How it works
// User types → form.value.message updates automatically
// TS updates value → textarea updates automatically
// 🚀 2. With Default Value
// 🔹 TS
// this.form = this.fb.group({
//   message: ['Hello Angular!']
// });

// 👉 Textarea will show default text automatically

// ❗ 3. With Validation
// 🔹 TS
// this.form = this.fb.group({
//   message: ['', Validators.required]
// });
// 🔹 HTML
// <textarea formControlName="message"></textarea>

// <div *ngIf="form.get('message')?.invalid && form.get('message')?.touched">
//   Message is required
// </div>
// ⚡ Important Points
// ✔ 1. Always use formControlName
// <textarea formControlName="message"></textarea>
// ✔ 2. Must define in TS FormGroup
// message: ['']
// ✔ 3. Must import ReactiveFormsModule
// import { ReactiveFormsModule } from '@angular/forms';
// 🎯 Final Simple Definition

// 👉 Binding a textarea in reactive form means using formControlName to connect the textarea with a FormControl so Angular manages its value and validation automatically.