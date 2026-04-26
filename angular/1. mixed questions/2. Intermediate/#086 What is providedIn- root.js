// Interview Answer:

// providedIn: 'root' registers a service in the root injector, so a single (singleton) instance is shared across the entire application.


// 🔹 In Angular

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {}

// 🔹 What it does

// Automatically adds service to root injector
// Creates only one instance
// Available everywhere in app


// 🔹 Why use it
// No need to add in providers
// Ensures singleton behavior
// Supports tree-shaking (unused services removed)