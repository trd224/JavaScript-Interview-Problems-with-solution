// 🔹 What is ngOnChanges in Angular?

// ngOnChanges is a lifecycle hook that is called whenever the value of an @Input property changes.


// 🔹 When It Runs
// Runs before ngOnInit
// Runs every time input data changes
// Only works with @Input() properties




// 🔹 Example
// Parent Component

// <app-child [name]="parentName"></app-child>


// Child Component

// import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `<p>{{ name }}</p>`
// })
// export class ChildComponent implements OnChanges {

//   @Input() name: string = '';

//   ngOnChanges(changes: SimpleChanges) {
//     console.log(changes);
//   }
// }




// 🔹 What is SimpleChanges?
// It is an object that contains:

// Previous value
// Current value
// First change flag

// {
//   name: {
//     previousValue: 'Ali',
//     currentValue: 'Rizwan',
//     firstChange: false
//   }
// }