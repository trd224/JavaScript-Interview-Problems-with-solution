// 👉 One-Line Interview Answer:
// ControlValueAccessor is an interface that allows us to create custom form controls in Angular that work like built-in form elements (like input select etc) with ngModel or Reactive Forms.


// Form controls are individual input elements managed by Angular forms, while custom form controls are user-created components that behave like standard inputs using ControlValueAccessor.



// 🔥 What is ControlValueAccessor?

// 👉 In simple words:
// It allows us to connect our custom component with Angular forms.

// 👉 Means:
// Custom component = behaves like <input>



// 🔹 Why do we need it?

// 👉 Normally Angular forms work with:

// <input>
// <select>
// <textarea>

// ❌ But NOT with custom components

// 👉 So we use ControlValueAccessor to:
// ✔ Make custom component form-compatible





// 🔹 Real Example

// 👉 Suppose you create custom input:

// <app-custom-input [(ngModel)]="name"></app-custom-input>

// 👉 Without ControlValueAccessor ❌ → Not work
// 👉 With ControlValueAccessor ✅ → Works like input





// 🔹 Interface Methods (Important 🔥)

// export class CustomInputComponent implements ControlValueAccessor {

//   writeValue(value: any) {
//     // Set value from form → UI
//   }

//   registerOnChange(fn: any) {
//     // UI → form update
//   }

//   registerOnTouched(fn: any) {
//     // mark as touched
//   }

//   setDisabledState(isDisabled: boolean) {
//     // handle disabled state
//   }
// }



// 🔹 Provide it in Component

// providers: [
//   {
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(() => CustomInputComponent),
//     multi: true
//   }
// ]




// 🔥 Simple Understanding
// Angular form talks to input using ControlValueAccessor
// We implement same bridge in custom component



// 🔹 Real Use Cases
// Custom dropdown
// Date picker
// Rating component ⭐
// Toggle switch
// Reusable input components




// | Feature     | Form Control | Custom Form Control        |
// | ----------- | ------------ | -------------------------- |
// | Type        | Built-in     | User-created               |
// | Example     | `<input>`    | `<app-input>`              |
// | Setup       | Direct use   | Needs ControlValueAccessor |
// | Flexibility | Limited      | Fully customizable         |
