// 🔹 What is a Directive in Angular?

// A Directive in Angular is a class that adds behavior to HTML elements or modifies the DOM.

// 👉 In simple words:
// Directive = Change appearance or behavior of elements



// 🔹 One-Line Interview Answer

// 👉 A directive in Angular is a class that modifies the behavior or appearance of DOM elements.



// 🔹 Types of Directives

// 1. Component (Special Directive)
// Has template (HTML)
// Example: <app-header>

// 2. Structural Directives

// 👉 Change the structure of the DOM

// Examples:

// *ngIf → Show/hide element
// *ngFor → Loop through data
//<div *ngIf="isVisible">Hello</div>


// 3. Attribute Directives

// 👉 Change style or behavior of elements

// Examples:

// ngClass → Add/remove CSS classes
// ngStyle → Apply styles
// <p [ngClass]="{active: isActive}">Text</p>



// 🔹 Example (Custom Directive)

// import { Directive, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {
//   constructor(el: ElementRef) {
//     el.nativeElement.style.backgroundColor = 'yellow';
//   }
// }

//<p appHighlight>Highlighted text</p>


// 🔹 Key Points
// Directives extend HTML functionality
// Do not have their own UI (except components)
// Reusable and powerful