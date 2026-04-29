// We handle number type inputs in Angular by ensuring the value is treated as a number (not string) using type="number" and proper form bindings.

// ✅ 1. Template-driven form
// <input type="number" name="age" [(ngModel)]="age">
// age: number = 0;

// 👉 Angular automatically converts input to number

// ✅ 2. Reactive form
// age = new FormControl(0);
// <input type="number" [formControl]="age">

// 👉 Value is stored as number

// ⚠️ Important Issue (common bug)

// Even with type="number":

// console.log(typeof this.age.value);

// 👉 Sometimes it may be "string" ❗ (especially with empty input)

// ✅ Safe Handling

// const value = Number(this.age.value);

// ✅ With validation
// age = new FormControl(0, [
//   Validators.required,
//   Validators.min(18)
// ]);

// 🔥 Best Practice
// Initialize with number (0, not '')
// Use validators (min, max)
// Convert explicitly if needed