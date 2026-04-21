// 🔹 What is ViewChild in Angular?


// 🔹 One-Line Interview Answer

// 👉 ViewChild is a decorator used to access and manipulate DOM elements or child components from the parent component class in Angular.



// 🔹 Why Use ViewChild?
// Directly access DOM elements
// Call child component methods
// Control elements from TS file



// 🔹 Example (Access Input Element)
// Template


// <input #myInput type="text">
// <button (click)="showValue()">Click</button>



// import { Component, ViewChild, ElementRef } from '@angular/core';

// export class AppComponent {

//   @ViewChild('myInput') myInput!: ElementRef;

//   showValue() {
//     console.log(this.myInput.nativeElement.value);
//   }
// }



// 🔹 Example (Child Component Access)
// Child Component

// export class ChildComponent {
//   greet() {
//     console.log("Hello from Child");
//   }
// }

// Parent Component

// import { ViewChild } from '@angular/core';
// import { ChildComponent } from './child.component';

// export class ParentComponent {

//   @ViewChild(ChildComponent) child!: ChildComponent;

//   callChild() {
//     this.child.greet();
//   }
// }




// 🔹 When ViewChild Works

// 👉 Available after view initialization

// ngAfterViewInit() {
//   // ViewChild is available here
// }



// 🔹 Key Points
// Used to access DOM or child components
// Works in TypeScript (not template)
// Returns first matching element