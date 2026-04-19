// 👉 One-Line Interview Answer:
// Functional route guards are functions in Angular used to control route access without creating a guard class.


// 🔥 What are Functional Route Guards?

// 👉 In simple words:
// Instead of a Guard class, we use a simple function to protect routes.



// 🔹 Why they are used?

// ✔ Less boilerplate
// ✔ Easier to write
// ✔ Modern Angular approach (standalone friendly)



// 🔹 Example (CanActivate Guard)
// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const isLoggedIn = true;

//   return isLoggedIn;
// };


// 🔹 Using in Routes
// import { Routes } from '@angular/router';
// import { authGuard } from './auth.guard';

// export const routes: Routes = [
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [authGuard]
//   }
// ];



// | Class Guard            | Functional Guard |
// | ---------------------- | ---------------- |
// | Uses @Injectable class | Uses function    |
// | More code              | Less code        |
// | Older approach         | Modern Angular   |
