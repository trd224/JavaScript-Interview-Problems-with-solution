// 🔹 What is ElementRef?

// 👉 ElementRef is a class in Angular that gives us direct access to a DOM element inside our component.


// 🔹 Why Use ElementRef?
// Access native HTML elements directly
// Read or modify DOM properties
// Used when Angular templates are not enough



// 🔹 Example
// Template

// <input #myInput type="text">

// Component

// import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// export class AppComponent implements AfterViewInit {

//   @ViewChild('myInput') myInput!: ElementRef;

//   ngAfterViewInit() {
//     console.log(this.myInput.nativeElement.value);
//   }
// }



// 🔹 Access DOM Element

// this.myInput.nativeElement.style.backgroundColor = 'yellow';
// this.myInput.nativeElement.focus();



// 🔹 Important Note 🔥

// Direct DOM manipulation is not recommended in Angular because:

// Can break Angular security model
// May cause XSS risks
// Reduces platform compatibility

// 👉 Preferred alternative:

// Renderer2 (safe way to access DOM)



// 🔹 ElementRef vs Renderer2

// | Feature     | ElementRef     | Renderer2     |
// | ----------- | -------------- | ------------- |
// | Direct DOM  | Yes            | No (safe way) |
// | Security    | Low            | High          |
// | Recommended | ❌ Avoid mostly | ✅ Yes         |
