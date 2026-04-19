// 👉 One-Line Interview Answer:
// providedIn: 'any' means Angular creates a separate instance of the service for every lazy-loaded module, instead of using a single shared instance.

// 🔥 What is providedIn: 'any'?

// 👉 In simple words:
// It tells Angular:
// ➡ “Create a new service instance per lazy module, but share within that module.”


// 🔹 Example

// @Injectable({
//   providedIn: 'any'
// })
// export class MyService {
//   constructor() {}
// }



// 🔹 How it behaves?

// 👉 Suppose you have modules:

// AppModule (eager loaded)
// AdminModule (lazy loaded)
// UserModule (lazy loaded)


// 🔥 What Angular does:

// | Module      | Service Instance |
// | ----------- | ---------------- |
// | AppModule   | Instance A       |
// | AdminModule | Instance B       |
// | UserModule  | Instance C       |

// ✔ Each lazy module gets its own copy


// 🔹 Why use providedIn: 'any'?
// Allow us to isolate services per lazy module
// Allow us to avoid sharing state between modules
// Useful for feature-based architecture



// 🔹 Comparison

// | Option | Meaning                      |
// | ------ | ---------------------------- |
// | `root` | Single global instance       |
// | `any`  | One instance per lazy module |
// | `null` | Must be provided manually    |

