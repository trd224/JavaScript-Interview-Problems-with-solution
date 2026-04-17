// 🔹 What is CanActivate Guard in Angular?

// 👉 CanActivate is a route guard used to allow or block access to a route based on a condition (like user authentication).


// 🔹 Why It Is Used
// Protect secure routes
// Allow access only to logged-in users
// Control navigation



// 🔹 Example
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {

//   canActivate(): boolean {
//     return false; // ❌ block route
//   }
// }
// Route Configuration
// { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

// 👉 If true → allow access
// 👉 If false → block access