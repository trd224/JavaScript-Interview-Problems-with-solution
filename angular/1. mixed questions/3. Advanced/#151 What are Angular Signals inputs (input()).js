// 👉 One-Line Interview Answer:
// input() is a Signals-based API in Angular used to receive reactive input values from a parent component as a Signal.



// 🔥 What is input()?

// 👉 In simple words:
// It is the Signal version of @Input()

// 👉 Old:

// @Input() name: string = '';

// 👉 New:

// name = input<string>();





// 🔹 Example

// Child Component

// import { Component, input } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   template: `<p>{{ name() }}</p>`
// })
// export class ChildComponent {
//   name = input<string>();
// }

// Parent Component

// <app-child [name]="'Rizwan'"></app-child>



// 🔥 What happens?

// ✔ Parent sends value
// ✔ Child receives it as Signal
// ✔ UI updates automatically



// 🔹 Why use input()?
// Works with Signals
// Reactive by default
// No need for ngOnChanges
// Cleaner code




// 🔹 Real Use Case
// count = input<number>();

// double = computed(() => this.count() * 2);

// ✔ Auto updates when parent changes