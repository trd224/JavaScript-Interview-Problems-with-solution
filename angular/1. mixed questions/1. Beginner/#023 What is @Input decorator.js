// 🔹 What is @Input Decorator in Angular?

// @Input is a decorator used to pass data from a parent component to a child component.



// 🔹 Why Use @Input?
// Share data between components
// Make components reusable
// Enable parent → child communication



// 🔹 Example
// Parent Component

// <app-child [name]="parentName"></app-child>

// Child Component

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `<p>Hello {{ name }}</p>`
// })
// export class ChildComponent {

//   @Input() name: string = '';
// }



// 👉 Data flows:
// Parent → Child


// 🔹 How It Works
// Parent binds value using [property]
// Child receives it using @Input()