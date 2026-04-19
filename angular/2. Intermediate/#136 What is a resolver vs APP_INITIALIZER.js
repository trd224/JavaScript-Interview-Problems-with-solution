// 👉 One-Line Interview Answer:
// A Resolver loads data before a route is activated, while APP_INITIALIZER runs before the Angular app starts to initialize global data or configuration.


// 🔥 Resolver vs APP_INITIALIZER

// 👉 In simple words:

// Resolver → runs before route loads
// APP_INITIALIZER → runs before app starts



// 🔹 Resolver

// 👉 Used in routing

// Example
// {
//   path: 'users',
//   component: UsersComponent,
//   resolve: { users: UsersResolver }
// }

// ✔ Fetch data before page loads
// ✔ Component gets data ready

// Access in component
// this.route.snapshot.data['users'];



// 🔹 APP_INITIALIZER

// 👉 Used in app startup

// Example
// providers: [
//   {
//     provide: APP_INITIALIZER,
//     useFactory: initApp,
//     multi: true
//   }
// ]

// function initApp() {
//   return () => fetch('/config.json');
// }

// ✔ Runs before app loads
// ✔ Loads global config



// | Feature   | Resolver       | APP_INITIALIZER  |
// | --------- | -------------- | ---------------- |
// | Runs when | Before route   | Before app start |
// | Scope     | Route-specific | Global           |
// | Use case  | Page data      | App config       |
// | Trigger   | Navigation     | App bootstrap    |
