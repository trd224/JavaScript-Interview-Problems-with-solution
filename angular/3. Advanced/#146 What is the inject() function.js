// 👉 One-Line Interview Answer:
// inject() is an Angular function used to access dependencies directly inside functions instead of using constructor injection.


// 🔥 What is inject()?

// 👉 In simple words:
// It allows us to get services without constructor



// 🔹 Example (Old way - constructor)
// constructor(private service: UserService) {}

// 🔹 Example (Using inject())
// import { inject } from '@angular/core';

// const service = inject(UserService);



// 🔥 Where do we use it?

// ✔ Functional route guards
// ✔ Functional interceptors
// ✔ Standalone APIs
// ✔ Utility functions



// 🔹 Example in Route Guard
// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = () => {
//   const authService = inject(AuthService);

//   return authService.isLoggedIn();
// };



// 🔥 Why use inject()?
// No constructor needed
// Works in functions
// Cleaner code
// Required for functional APIs