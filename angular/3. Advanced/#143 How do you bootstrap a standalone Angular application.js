// 👉 One-Line Interview Answer:
// A standalone Angular application is bootstrapped using bootstrapApplication() instead of an NgModule.

// 🔥 How to Bootstrap Standalone App?

// 👉 In simple words:
// We start the app directly with a component (no AppModule)



// 🔹 Example
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent);


// ✔ App starts from AppComponent
// ✔ No AppModule needed



// 🔹 AppComponent (Standalone)

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `<h1>Hello Standalone 🚀</h1>`
// })
// export class AppComponent {}

// 🔥 Adding Providers (Important 🔥)

// bootstrapApplication(AppComponent, {
//   providers: [
//     // services, interceptors, etc.
//   ]
// });

// 🔹 Example with Router

// import { provideRouter } from '@angular/router';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes)
//   ]
// });