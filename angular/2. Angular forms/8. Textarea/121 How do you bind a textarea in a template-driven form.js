// In a template-driven form, you bind a <textarea> using [(ngModel)], which creates two-way data binding between the UI and your component.

// 💡 What is textarea binding?

// 👉 It means: whatever user types in textarea is stored in a variable automatically.

// ✅ 1. Basic Example
// 🔹 HTML
// <textarea [(ngModel)]="message" name="message"></textarea>
// 🔹 TS
// message: string = '';
// 🧠 How it works
// User types → message updates automatically
// message changes in TS → textarea updates automatically
// 🚀 2. With Form Example
// 🔹 HTML
// <form #f="ngForm">

//   <label>Message:</label>

//   <textarea
//     name="message"
//     [(ngModel)]="message"
//     required
//     rows="5">
//   </textarea>

//   <p>Preview: {{ message }}</p>

// </form>
// 🔹 TS
// message: string = '';
// ⚡ 3. With Default Value
// message: string = 'Hello Angular!';

// 👉 Textarea will automatically show this value.

// ❗ Important Rules
// ✔ 1. name is REQUIRED
// name="message"

// Without name, Angular will throw an error in template-driven forms.

// ✔ 2. Must import FormsModule
// import { FormsModule } from '@angular/forms';
// 🎯 Final Simple Definition

// 👉 Binding a textarea in template-driven form means using [(ngModel)] to connect textarea value with a component variable for automatic two-way data sync.