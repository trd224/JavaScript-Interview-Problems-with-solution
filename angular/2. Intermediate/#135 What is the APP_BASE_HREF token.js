// 👉 One-Line Interview Answer:
// APP_BASE_HREF is an "Angular injection token" used to define the base URL for routing in an application.


// 🔥 What is APP_BASE_HREF?

// 👉 In simple words:
// It tells Angular from which base path routing should start



// 🔹 Example

// 👉 Suppose your app is hosted at:

// /my-app/

// 👉 Then you configure:

// providers: [
//   { provide: APP_BASE_HREF, useValue: '/my-app/' }
// ]



// 🔹 Why do we need it?

// 👉 Angular Router needs base path to:

// Generate correct URLs
// Navigate properly
// Handle deep links


// 🔹 Without it ❌

// 👉 App may break when hosted in subfolder

// /home → ❌ not found


// 🔹 With it ✅
// /my-app/home → ✔ works





// 🔹 Alternative (index.html)
// <base href="/my-app/">

// ✔ Most common way