// 👉 One-Line Interview Answer:
// resource() is an Angular Signals API used to handle async data (like API calls) with built-in loading, error, and value states.



// 🔥 What is resource()?

// 👉 In simple words:
// It is a Signal-based way to fetch and manage async data

// 👉 Replacement for:

// manual subscribe()
// loading flags
// error handling




// Basic Example

// import { resource } from '@angular/core';

// userResource = resource({
//   loader: () => fetch('/api/user').then(res => res.json())    //loader is a function inside resource() that defines how to fetch or load the async data.
// });

// 🔹 Use in Template

// @if (userResource.loading()) {
//   <p>Loading...</p>
// } @else if (userResource.error()) {
//   <p>Error occurred</p>
// } @else {
//   <p>{{ userResource.value().name }}</p>
// }

// 🔥 What it provides?

// loading() → loading state
// error() → error state
// value() → data



// 🔹 How it works
// Call API → loading → success/error → UI updates automatically


// ✔ No manual subscribe
// ✔ No extra variables





// 🔹 Example

// userResource = resource({
//   loader: () => fetch('/api/user').then(res => res.json())
// });

// 🔥 What happens here?

// 👉 Flow:

// loader runs → API call → data comes → resource updates

// ✔ loader executes automatically
// ✔ Updates loading, error, value



// 🔹 Async Example

// dataResource = resource({
//   loader: async () => {
//     const res = await fetch('/api/data');
//     return res.json();
//   }
// });