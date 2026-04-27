// Template-driven forms in Angular are simple and easy to use, but they come with several limitations compared to reactive forms.

// ⚠️ 1. Less scalable for large forms
// Hard to manage complex forms with many fields
// Logic becomes messy in the template

// ⚠️ 2. Limited control in TypeScript
// Most logic stays in HTML
// Difficult to manage dynamically (add/remove controls)

// ⚠️ 3. Harder to test
// Since logic is in template
// Unit testing form behavior becomes difficult

// ⚠️ 4. Less predictable structure
// Form structure is not fully defined in component
// Hard to track form state in large apps

// ⚠️ 5. Limited dynamic form support
// Creating forms dynamically (based on API/data) is not easy
// Reactive forms are better for this

// ⚠️ 6. Validation flexibility is limited
// Built-in validators are easy
// But custom/complex validation is harder to implement

// ⚠️ 7. Dependency on ngModel
// Requires name + ngModel everywhere
// Can become repetitive and error-prone