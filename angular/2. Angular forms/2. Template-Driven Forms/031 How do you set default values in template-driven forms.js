// We set default values in template-driven forms in Angular using ngModel with initial values from the component.

// ✅ Method 1: Using [(ngModel)] (most common)
// <form #f="ngForm">
//   <input name="username" [(ngModel)]="username">
// </form>
// username = 'John';

// 👉 Input will show "John" as default

// ✅ Method 2: Using [ngModel] (one-way)
// <input name="email" [ngModel]="email">
// email = 'test@gmail.com';

// 👉 Sets initial value only (no update back)

// ✅ Method 3: Using value attribute (static)
// <input name="city" ngModel value="Delhi">

// 👉 Works, but:

// ❌ Not dynamic
// ❌ Not recommended for real apps
// 🔥 Best Practice
// Use [(ngModel)] when we want default + two-way binding
// Use [ngModel] when we want only initial value