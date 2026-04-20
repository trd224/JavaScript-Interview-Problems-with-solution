// 👉 One-Line Interview Answer:
// Partial hydration is a technique where Angular hydrates only the required parts of the UI instead of the entire page, improving performance.


// 🔥 What is Partial Hydration?

// 👉 In simple words:
// Instead of activating the whole page, Angular activates only needed components


// 🔹 Normal Hydration ❌

// Full page → all components hydrated

// ❌ More JS work
// ❌ Slower on large apps



// 🔹 Partial Hydration ✅

// Only visible/important parts → hydrated
// Rest → stays static (until needed)

// ✔ Less work
// ✔ Faster performance



// 🔥 Example with @defer
// <h1>Home Page</h1>

// @defer (on viewport) {
//   <app-heavy-chart></app-heavy-chart>
// }

// 👉 What happens:

// Page loads → chart NOT hydrated  
// User scrolls → chart hydrates ⚡



// 🔹 How it works?
// SSR sends full HTML
// Angular hydrates only critical parts
// Other parts hydrate later (on demand)




// 🔹 Benefits
// Faster startup ⚡
// Reduced JS execution
// Better performance on large apps
// Works well with @defer