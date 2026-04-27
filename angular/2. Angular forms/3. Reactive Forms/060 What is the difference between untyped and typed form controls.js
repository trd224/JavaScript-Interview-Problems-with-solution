// The difference between untyped and typed form controls in Angular is that typed controls use TypeScript generics for strong type safety, while untyped controls use any and provide no compile-time checking.

// 🔥 Core Difference

// | Feature         | Untyped FormControl | Typed FormControl |
// | --------------- | ------------------- | ----------------- |
// | Type            | `any`               | `FormControl<T>`  |
// | Type safety     | ❌ No                | ✅ Yes             |
// | IntelliSense    | ❌ Poor              | ✅ Strong          |
// | Error detection | ❌ Runtime           | ✅ Compile-time    |



// ❌ Untyped Example
// username = new FormControl('');

// 👉 Type:

// FormControl<any>
// this.username.value.toUpperCase(); // ❌ no error even if value is not string

// ✅ Typed Example
// username = new FormControl<string>('John');

// 👉 Type:

// FormControl<string | null>
// this.username.value.toUpperCase(); // ✅ safe

// ⚠️ Error Example (typed)
// username = new FormControl<string>('John');

// this.username.setValue(123); // ❌ TypeScript error

// 🔥 Key Idea
// Untyped → flexible but unsafe
// Typed → strict but safe