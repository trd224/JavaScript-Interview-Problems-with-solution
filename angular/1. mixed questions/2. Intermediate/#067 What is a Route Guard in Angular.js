// 🔹 What is a Route Guard in Angular?

// 👉 A Route Guard is a feature in Angular used to control access to routes based on conditions like authentication or authorization.



// 🔹 Why It Is Used
// Protect routes (secure pages)
// Allow or block navigation
// Check login/permissions


// 🔹 Types of Route Guards
// CanActivate → Allow/deny access to route
// CanDeactivate → Prevent leaving a page
// CanLoad → Prevent module loading
// Resolve → Fetch data before route loads


// 🔹 Example (CanActivate)
// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {

//   canActivate(): boolean {
//     return false; // block access
//   }
// }



// Route Usage
// { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }