// We bind an input field in a template-driven form in Angular using the ngModel directive along with the name attribute.

// ✅ Basic Example
// <form #f="ngForm">
//   <input name="username" ngModel>
// </form>

// 👉 This:

// Creates a form control
// Registers it with NgForm
// Tracks value & validation


// ✅ With Two-Way Binding
// <input name="username" [(ngModel)]="username">

// 👉 Syncs:

// Component ⇄ Input field


// ✅ With Template Reference
// <input name="username" ngModel #u="ngModel">

// <p>{{ u.value }}</p>


// 🔥 Important Rules
// name is required
// ngModel is required
// Without these → Angular won’t register control