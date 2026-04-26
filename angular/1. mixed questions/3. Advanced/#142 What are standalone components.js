// 👉 One-Line Interview Answer:
// Standalone components are Angular components that can work independently without being declared in an NgModule.


// 🔥 What are Standalone Components?

// 👉 In simple words:
// They are components without NgModule



// 🔹 Example
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   standalone: true,
//   template: `<p>Hello Standalone 🚀</p>`
// })
// export class DemoComponent {}
// 🔹 Using Standalone Component
// import { bootstrapApplication } from '@angular/platform-browser';

// bootstrapApplication(DemoComponent);



// 🔥 Importing Dependencies

// 👉 Instead of NgModule, we use imports

// @Component({
//   standalone: true,
//   imports: [CommonModule],
//   template: `<div *ngIf="true">Hello</div>`
// })



// 🔹 Why use Standalone?
// No NgModule needed
// Less boilerplate
// Cleaner structure
// Faster development