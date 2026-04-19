// Interview Answer:

// JIT (Just-in-Time) compilation in Angular is the process where Angular code is compiled into JavaScript in the browser at runtime when the application is running.


// 🔹 What it means (simple)
// Code is compiled inside the browser
// Happens after app starts running
// Used mainly in development mode



// 🔹 How it works

// Angular Code (HTML + TS)
//         ↓
// Browser loads app
//         ↓
// JIT Compiler runs in browser
//         ↓
// JavaScript is generated at runtime




// 🔹 Why we use JIT
// Faster development cycle 🔄
// Easy debugging 🐞
// No build step required for compilation




// 🔹 Simple example

// When you run:

// ng serve

// 👉 Angular uses JIT compilation



// 🔹 AOT vs JIT (important comparison)

// | Feature       | JIT               | AOT        |
// | ------------- | ----------------- | ---------- |
// | When compiled | Runtime (browser) | Build time |
// | Speed         | Slower ⏳          | Faster 🚀  |
// | Usage         | Development       | Production |
// | File size     | Larger            | Smaller    |
