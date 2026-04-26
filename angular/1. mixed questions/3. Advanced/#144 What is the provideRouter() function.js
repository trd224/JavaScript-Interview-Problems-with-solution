// 👉 One-Line Interview Answer:
// provideRouter() is a function used in standalone Angular apps to configure and provide routing without using RouterModule.


// 🔥 What is provideRouter()?

// 👉 In simple words:
// It is used to set up routing in standalone apps

// 👉 Replacement for:
// RouterModule.forRoot()



// 🔹 Example

// app.routes.ts

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'about', component: AboutComponent }
// ];

// main.ts

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes)
//   ]
// });



// 🔥 What it does?

// ✔ Registers routes
// ✔ Enables navigation
// ✔ Works without NgModule


// 🔹 Old vs New

// | Old (NgModule)               | New (Standalone)      |
// | ---------------------------- | --------------------- |
// | RouterModule.forRoot(routes) | provideRouter(routes) |
