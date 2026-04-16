// 🔹 What is @Output Decorator in Angular?

// @Output is a decorator used to send data from a child component to a parent component.



// 🔹 Why Use @Output?
// Notify parent about events
// Send data from child to parent
// Handle user actions (click, form submit, etc.)



// 🔹 Key Concept: EventEmitter

// @Output works with EventEmitter to emit events.




// 🔹 Example
// Child Component

// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `<button (click)="sendData()">Send Data</button>`
// })
// export class ChildComponent {

//   @Output() messageEvent = new EventEmitter<string>();

//   sendData() {
//     this.messageEvent.emit("Hello Parent!");
//   }
// }


// Parent Component

// <app-child (messageEvent)="receiveMessage($event)"></app-child>
// <p>{{ message }}</p>

// export class ParentComponent {
//   message = '';

//   receiveMessage(data: string) {
//     this.message = data;
//   }
// }