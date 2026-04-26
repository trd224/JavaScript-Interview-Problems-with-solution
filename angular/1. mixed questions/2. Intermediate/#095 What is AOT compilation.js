// Interview Answer:

// AOT (Ahead-of-Time) compilation in Angular is the process of converting Angular HTML and TypeScript code into optimized JavaScript code during the build phase before the application runs in the browser.


// 🔹 What it means (simple)
// Code is compiled before running in browser
// Browser gets ready-to-run JavaScript
// Happens during ng build


// 🔹 Why we use AOT
// Faster app startup 🚀
// Fewer runtime errors ❌
// Better performance
// Smaller bundle size



// 🔹 Example

// Without AOT:

// Template + TypeScript compiled in browser (slower)

// With AOT:

// Everything already compiled before browser loads




// 🔹 Simple flow

// Angular Code (HTML + TS)
//         ↓
// AOT Compilation (build time) using ng build
//         ↓
// Optimized JavaScript
//         ↓
// Browser runs app




// 🔹 JIT vs AOT (important)

// | Feature       | AOT            | JIT         |
// | ------------- | -------------- | ----------- |
// | When compiled | Before runtime | In browser  |
// | Speed         | Faster         | Slower      |
// | Usage         | Production     | Development |
