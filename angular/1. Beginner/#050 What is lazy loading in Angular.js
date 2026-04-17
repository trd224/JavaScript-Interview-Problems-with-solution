// 🔹 What is Lazy Loading in Angular?

// 👉 Lazy loading in Angular is a technique used to load modules only when they are needed instead of loading the entire application at once.


// 🔹 Why Use Lazy Loading?
// Improves application performance
// Reduces initial load time
// Loads features on demand



// 🔹 Example
// Route Configuration  //👉 AdminModule loads only when user visits /admin

// const routes = [
//   {
//     path: 'admin',
//     loadChildren: () =>
//       import('./admin/admin.module').then(m => m.AdminModule)
//   }
// ];


// 🔹 How It Works
// App loads initially (main module only)
// User navigates to a route
// Angular loads that module dynamically