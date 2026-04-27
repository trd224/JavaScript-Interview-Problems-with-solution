// Typed forms in Angular (Angular 14+) are reactive forms with strong TypeScript typing, where form values and controls have explicit types instead of any.

// ✅ Simple Meaning

// We define forms with strict types, so TypeScript knows exactly what data each control holds.

// 🔥 Before Angular 14 (untyped)
// myForm = new FormGroup({
//   username: new FormControl(''),
// });

// 👉 Type:

// FormGroup<any>

// ❌ No type safety

// ✅ After Angular 14 (typed forms)
// myForm = new FormGroup({
//   username: new FormControl<string>(''),
// });

// 👉 Type:

// FormGroup<{
//   username: FormControl<string>;
// }>

// ✅ Fully typed

// ✅ Example
// myForm = new FormGroup({
//   username: new FormControl<string>('John'),
//   age: new FormControl<number>(25)
// });

// const name = this.myForm.value.username; // string


// 🔍 With FormBuilder (typed)
// myForm = this.fb.group({
//   username: [''],   // inferred as string
//   age: [0]          // inferred as number
// });


// 🔥 Benefits
// ✅ Type safety
// ✅ Better IntelliSense
// ✅ Compile-time error detection
// ✅ No unexpected any


// ⚠️ Note

// Default FormControl still allows null

// FormControl<string | null>
// Use NonNullableFormBuilder to remove null