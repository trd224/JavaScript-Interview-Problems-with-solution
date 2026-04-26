// 👉 One-Line Interview Answer:
// A multi-provider in Angular allows us to register multiple values for the same injection token and receive them as an array.


// 🔥 What is Multi-Provider?

// 👉 In simple words:
// It allows us to store multiple values/services under one token.

// 👉 Instead of one value → we get array of values



// 🔹 Example

// providers: [
//   { provide: 'LOGS', useValue: 'Log1', multi: true },
//   { provide: 'LOGS', useValue: 'Log2', multi: true }
// ]


// 🔹 Injecting it

// constructor(@Inject('LOGS') logs: string[]) {
//   console.log(logs);
// }

// Output:
// ['Log1', 'Log2']



// 🔥 Important Point

// 👉 multi: true is must

// ❌ Without it → last value overrides
// ✅ With it → values are combined into array




// 🔹 Real Example (Angular uses internally)

// 👉 HTTP Interceptors

// providers: [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
// ]

// ✔ Multiple interceptors run in chain




// 🔹 Key Points
// Allows multiple providers for same token
// Returns array of values
// multi: true is required
// Used in interceptors, validators, plugins




// 🔥 Simple Understanding
// Normal provider → single value
// Multi-provider → multiple values (array)