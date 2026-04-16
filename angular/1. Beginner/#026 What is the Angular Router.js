// 🔹 What is the Angular Router?

// Angular Router is a feature/module that allows you to navigate between different views (pages) in a Single Page Application (SPA) without reloading the browser.



// 🔹 Why It Is Used
// Move between pages without refresh
// Build SPA (Single Page Applications)
// Manage URLs and navigation



// 🔹 Basic Example

// Step 1: Define Routes

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


// Step 2: Add Router Outlet

// <router-outlet></router-outlet>


// Step 3: Navigation Links

// <a routerLink="/">Home</a>
// <a routerLink="/about">About</a>




// 🔹 How It Works
// User clicks link
// URL changes
// Router loads corresponding component
// View updates without page reload



// 🔹 Key Features
// Route configuration
// Lazy loading
// Route guards (security)
// Dynamic routing (/user/:id)