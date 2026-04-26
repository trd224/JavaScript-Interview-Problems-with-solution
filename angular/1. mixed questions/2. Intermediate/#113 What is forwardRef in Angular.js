// 👉 One-Line Interview Answer:
// forwardRef in Angular is used to reference a class, service, or provider before it is actually defined, solving circular dependency or declaration order issues.


// 🔥 What is forwardRef in Angular?

// 👉 In simple words:
// Sometimes Angular needs a class before it is created, so we use forwardRef() to delay the reference.



// 🔹 Why do we need it?

// 👉 Because of circular dependency or early reference problem

// Example:

// Class A needs Class B
// Class B also needs Class A

// 👉 Angular gets confused ❌
// 👉 forwardRef solves this ✔





// 🔹 Example 1 (Provider case)

// providers: [
//   { provide: MyService, useClass: forwardRef(() => MyService) }
// ]




// 🔹 Example 2 (Circular dependency)

// export class A {
//   constructor(private b: B) {}
// }

// export class B {
//   constructor(private a: A) {}
// }


// 👉 To solve this:

// export class A {
//   constructor(@Inject(forwardRef(() => B)) private b: B) {}
// }




// 🔥 How it works internally

// 👉 Instead of resolving immediately, Angular:

// Stores function reference
// Executes it later when class is available