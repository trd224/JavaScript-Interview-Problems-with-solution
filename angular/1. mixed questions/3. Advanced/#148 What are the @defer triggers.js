// 👉 One-Line Interview Answer:
// @defer triggers are conditions that decide when Angular should load and render deferred content in the template.



// 🔹 1. on viewport

// 👉 Loads when element becomes visible on screen

// @defer (on viewport) {
//   <app-heavy-chart></app-heavy-chart>
// }

// ✔ Best for below-the-fold UI

// 🔥 Example Flow
// User scrolls → component becomes visible → loads ⚡



// 🔹 2. on interaction

// 👉 Loads when user interacts (click, hover, etc.)

// @defer (on interaction) {
//   <app-comments></app-comments>
// }

// ✔ Loads on click/touch



// 🔹 3. on idle

// 👉 Loads when browser is idle (no heavy work)

// @defer (on idle) {
//   <app-recommendations></app-recommendations>
// }

// ✔ Good for background loading



// 🔹 4. on timer

// 👉 Loads after a delay

// @defer (on timer(5s)) {
//   <app-banner></app-banner>
// }

// ✔ Loads after 5 seconds



// 🔹 5. when (custom condition)

// 👉 Loads when a condition becomes true

// @defer (when showChart) {
//   <app-chart></app-chart>
// }

// ✔ Fully controlled by developer