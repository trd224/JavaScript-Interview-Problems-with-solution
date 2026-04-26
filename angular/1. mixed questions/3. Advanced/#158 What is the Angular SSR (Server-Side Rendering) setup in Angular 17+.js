// 👉 One-Line Interview Answer:
// Angular SSR in Angular 17+ is a setup that renders the app on the server using @angular/ssr for faster load, better SEO, and improved performance.


// 🔥 What is Angular SSR?

// 👉 In simple words:
// App is rendered on server first, then sent to browser




// 🔹 Without SSR (CSR) ❌
// Browser → loads JS → renders UI (slow first load)
// 🔹 With SSR ✅
// Server → renders HTML → browser shows instantly ⚡

// ✔ Faster first paint
// ✔ Better SEO





// 🔥 Angular 17+ SSR Setup

// 👉 Angular now uses modern SSR package

// 🔹 Step 1: Add SSR

// ng add @angular/ssr
// 🔹 What it does?

// ✔ Creates server files
// ✔ Configures build
// ✔ Adds SSR support automatically

// 🔹 Project Structure
// src/
//  ├── main.ts
//  ├── main.server.ts   ← server entry
//  ├── app/
// server.ts             ← Node server

// 🔹 Step 2: Run SSR

// npm run dev:ssr

// 🔹 Step 3: Build SSR

// npm run build:ssr
// npm run serve:ssr

// 🔥 How it works?
// Request comes to server
// Angular renders page
// Sends HTML to browser
// Angular hydrates on client

// 🔹 Hydration (Important 🔥)

// 👉 Browser reuses server HTML and attaches events

// ✔ No full re-render