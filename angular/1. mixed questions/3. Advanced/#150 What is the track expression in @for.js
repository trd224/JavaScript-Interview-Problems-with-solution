// 👉 One-Line Interview Answer:
// The track expression in @for is used to uniquely identify items in a list so Angular can efficiently update the DOM during rendering.


// 🔥 What is track in @for?

// 👉 In simple words:
// It tells Angular how to identify each item in a loop


// 🔹 Example
// @for (user of users; track user.id) {
//   <li>{{ user.name }}</li>
// }



// 🔥 Why is it needed?

// 👉 Without track, Angular may:

// Re-render entire list ❌
// Lose performance ❌
// Recreate DOM elements ❌



// 🔹 With track (Good ✔)
// User list changes → only changed items update


// 🔹 Without track (Bad ❌)
// User list changes → whole list re-renders