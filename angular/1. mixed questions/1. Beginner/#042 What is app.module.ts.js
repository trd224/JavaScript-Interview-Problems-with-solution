// 🔹 What is app.module.ts in Angular?

// 👉 app.module.ts is the root module of an Angular application that defines and organizes components, services, and other modules.


// 🔹 Why It Is Important
// Entry point of the Angular app
// Registers components, modules, and services
// Bootstraps the main component


// 🔹 Example

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],  // components
//   imports: [BrowserModule],      // modules
//   providers: [],                // services
//   bootstrap: [AppComponent]     // starting component
// })
// export class AppModule {}



// 🔹 Key Parts
// declarations → Components, directives, pipes
// imports → Other modules
// providers → Services
// bootstrap → Root component