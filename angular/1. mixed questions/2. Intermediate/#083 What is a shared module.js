// 👉 One-line (your style):
// A Shared Module is an Angular module that contains reusable components, directives, and pipes used across multiple modules.

// 🔹 Why we use it
// Avoid repeating code
// Share common UI components (buttons, headers, pipes, etc.)
// Keep project clean and organized


// 🔹 Example
// @NgModule({
//   declarations: [ButtonComponent, HeaderComponent, CustomPipe],
//   imports: [CommonModule],
//   exports: [ButtonComponent, HeaderComponent, CustomPipe]
// })
// export class SharedModule {}



// 🔹 How it is used

// @NgModule({
//   imports: [SharedModule]
// })
// export class FeatureModule {}

// 👉 Now FeatureModule can use:

// ButtonComponent
// HeaderComponent
// CustomPipe