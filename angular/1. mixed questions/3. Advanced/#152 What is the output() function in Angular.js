// 👉 One-Line Interview Answer:
// output() is a Signals-based API in Angular used to emit events from a child component to a parent component.


// 🔥 What is output()?

// 👉 In simple words:
// It is the Signal-based replacement of @Output() + EventEmitter



// 🔹 Old way ❌

// @Output() clicked = new EventEmitter<string>();

// this.clicked.emit('Hello');

// 🔹 New way ✅

// import { output } from '@angular/core';

// clicked = output<string>();

// this.clicked.emit('Hello');





// 🔹 Example

// Child Component

// import { Component, output } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   template: `<button (click)="send()">Click</button>`
// })
// export class ChildComponent {

//   clicked = output<string>();

//   send() {
//     this.clicked.emit('Hello from child');
//   }
// }

// Parent Component

// <app-child (clicked)="handleClick($event)"></app-child>
// handleClick(value: string) {
//   console.log(value);
// }



// 🔥 What happens?

// ✔ Child emits event
// ✔ Parent receives it
// ✔ Same as EventEmitter but modern