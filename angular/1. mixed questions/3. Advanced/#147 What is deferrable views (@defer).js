// 👉 One-Line Interview Answer:
// @defer is an Angular feature that delays loading and rendering parts of a template until they are needed, improving initial load performance.


// 🔥 What are Deferrable Views (@defer)?

// 👉 In simple words:
// It allows Angular to lazy-load UI blocks inside a component template



// 🔹 Example
// @defer {
//   <app-heavy-chart></app-heavy-chart>
// }

// 👉 Here:
// ✔ Component loads only when needed
// ✔ Not on initial page load



// 🔹 With Placeholder
// @defer {
//   <app-dashboard></app-dashboard>
// } @placeholder {
//   <p>Loading dashboard...</p>
// }


// 🔹 With Trigger (important 🔥)
// @defer (on viewport) {
//   <app-heavy-chart></app-heavy-chart>
// }

// ✔ Loads when user scrolls to it





// 🔹 Triggers
// on viewport → when visible
// on interaction → on click
// on timer → after delay
// on idle → when browser is idle





// 🔥 Simple Real Example

// 👉 Suppose you have a heavy chart component:

// 🔹 Component HTML
// <h1>Dashboard</h1>

// @defer {
//   <app-heavy-chart></app-heavy-chart>
// } @placeholder {
//   <p>Loading chart...</p>
// }


// 🔥 What happens?

// ✔ Before defer:
// Page loads → Heavy chart loads immediately ❌ (slow)

// ✔ With @defer:
// Page loads → Placeholder shows  
// User reaches chart → Chart loads ⚡





// 🔹 Example with Trigger (scroll)

// @defer (on viewport) {
//   <app-heavy-chart></app-heavy-chart>
// } @placeholder {
//   <p>Scroll to load chart...</p>
// }

// 🔥 What happens now?

// ✔ Chart loads only when user scrolls to it
// ✔ Saves initial load time




// 🔹 Example with Click

// <button (click)="show = true">Load Chart</button>

// @defer (when show) {
//   <app-heavy-chart></app-heavy-chart>
// } @placeholder {
//   <p>Click to load chart</p>
// }



// @defer vs lazy loading modules

// @defer loads parts of a template lazily inside a component, while lazy loading modules loads entire feature modules only when a route is visited.



// | Feature     | @defer            | Lazy Loading               |
// | ----------- | ----------------- | -------------------------- |
// | Level       | Template          | Route/module               |
// | Loads       | Component UI      | Full module                |
// | Trigger     | Scroll/click/idle | Route navigation           |
// | Scope       | Inside page       | Whole feature              |
// | Performance | UI optimization   | App structure optimization |
