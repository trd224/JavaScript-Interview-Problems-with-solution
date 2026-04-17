// 🔹 What is the use of trackBy in *ngFor?

// 👉 trackBy is used to improve performance by helping Angular identify items uniquely so it updates only changed elements instead of re-rendering the entire list.


// 🔹 Why Use trackBy?
// Avoid unnecessary DOM updates
// Improve performance for large lists
// Prevent full re-rendering



// 🔹 Example (Without trackBy ❌)   //👉 Angular re-renders entire list on any change

// <li *ngFor="let item of items">
//   {{ item.name }}
// </li>



// 🔹 Example (With trackBy ✅)

// <li *ngFor="let item of items; trackBy: trackById">
//   {{ item.name }}
// </li>


// trackById(index: number, item: any) {
//   return item.id;
// }



// 🔹 How It Works
// Angular uses returned value (like id)
// Tracks items uniquely
// Updates only affected DOM elements



// 🔹 Key Points
// Used with *ngFor
// Improves performance
// Important for large or dynamic lists