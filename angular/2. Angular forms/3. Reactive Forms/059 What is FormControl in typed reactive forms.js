// FormControl in typed reactive forms in Angular is a generic class (FormControl<T>) that represents a single form field with a strongly typed value.

// ✅ Simple Meaning

// We define the type of value a control holds using generics.

// ✅ Example
// username = new FormControl<string>('John');

// 👉 Now:

// username.value → string
// TypeScript knows exact type ✅
// ⚠️ Default behavior
// username = new FormControl<string>('John');

// 👉 Type is actually:

// FormControl<string | null>

// ❗ Because Angular allows null by default

// ✅ Non-nullable version
// username = new FormControl<string>('John', { nonNullable: true });

// 👉 Now:

// FormControl<string>

// ✔️ No null allowed

// 🔥 Example in FormGroup
// myForm = new FormGroup({
//   username: new FormControl<string>(''),
//   age: new FormControl<number>(0)
// });

// ⚡ Key Benefits
// Strong typing
// Better IntelliSense
// Compile-time safety