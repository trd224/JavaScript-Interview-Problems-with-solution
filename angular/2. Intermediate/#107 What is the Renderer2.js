// 👉 One-Line Interview Answer:
// Renderer2 is an Angular service that allows us to safely manipulate DOM elements in a platform-independent way without directly accessing the native DOM.



// 🔹 What is Renderer2?

// 👉 In simple words:
// Renderer2 is used to change UI elements (DOM) in a safe Angular way instead of using document.querySelector.


// 🔹 Why do we use it?
// Allow us to avoid direct DOM manipulation
// Allow us to make code safe for SSR (Server-Side Rendering)
// Allow us to support different platforms (web, mobile, etc.)
// Allow us to follow Angular best practices


// 🔹 Example

//👉 Without Renderer2, We use direct DOM manipulation, 

// import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<p #text>Hello Angular</p>`
// })
// export class DemoComponent {

//   @ViewChild('text') text!: ElementRef;

//   ngAfterViewInit() {
//     this.text.nativeElement.style.color = 'red';
//   }
// }


//👉 With Renderer2

// import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<button #btn>Click Me</button>`
// })
// export class DemoComponent {

//   @ViewChild('btn') btn!: ElementRef;

//   constructor(private renderer: Renderer2) {}

//   ngAfterViewInit() {
//     this.renderer.setStyle(this.btn.nativeElement, 'color', 'red');
//   }
// }


//👉 With pure JavaScript

//document.getElementById('myDiv').style.color = 'blue';


// 🔹 Common Renderer2 Methods
// setStyle() → change CSS
// addClass() → add CSS class
// removeClass() → remove CSS class
// setAttribute() → set HTML attributes
// appendChild() → add elements dynamically



// 🔹 Real-Life Example

// 👉 Instead of:

// document.getElementById('box').style.color = 'blue';

// 👉 We use:

// this.renderer.setStyle(element, 'color', 'blue');



// 🔹 Key Points
// Safe way to manipulate DOM
// Works across platforms
// Recommended over direct DOM access
// Used with ElementRef