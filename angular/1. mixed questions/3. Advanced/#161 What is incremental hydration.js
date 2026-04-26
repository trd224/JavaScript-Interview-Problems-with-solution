// 👉 One-Line Interview Answer:
// Incremental hydration is a technique where Angular hydrates parts of the application step-by-step over time instead of hydrating everything at once.

// 🔥 What is Incremental Hydration?

// 👉 In simple words:
// Hydration happens gradually (in steps), not all at once.

// 🔹 Full Hydration ❌
// Page loads → all components hydrate together 😴

// ❌ Heavy work at once
// ❌ Slower interaction

// 🔹 Incremental Hydration ✅
// Step 1 → critical UI hydrates  
// Step 2 → less important parts hydrate  
// Step 3 → remaining parts hydrate

// ✔ Faster initial interaction
// ✔ Better performance

// 🔹 Example with @defer
// <h1>Dashboard</h1>

// @defer (on viewport) {
//   <app-chart></app-chart>
// }

// @defer (on idle) {
//   <app-recommendations></app-recommendations>
// }
// 🔥 What happens?
// Page loads → header hydrates first  
// Scroll → chart hydrates  
// Idle → recommendations hydrate

// ✔ Step-by-step activation


// 🔹 How it works?
// SSR sends full HTML
// Angular hydrates critical parts first
// Remaining parts hydrate based on triggers