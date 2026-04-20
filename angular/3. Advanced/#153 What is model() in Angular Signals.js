// 👉 One-Line Interview Answer:
// model() is a Signals-based API in Angular used for two-way data binding between parent and child components.



// 🔥 What is model()?

// 👉 In simple words:
// It is the Signal version of two-way binding ([(ngModel)])

// 👉 Combines:

// input() + output()
// In one API ✔



// 🔥 Full Example (Parent + Child)

// 🔹 1. Child Component

// import { Component, model } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   template: `
//     <h3>Child Component</h3>
    
//     <input 
//       [value]="name()" 
//       (input)="name.set(($event.target as HTMLInputElement).value)" 
//     />

//     <p>Child Value: {{ name() }}</p>
//   `
// })
// export class ChildComponent {
//   name = model<string>();
// }

// 🔹 2. Parent Component

// import { Component, signal } from '@angular/core';
// import { ChildComponent } from './child.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ChildComponent],
//   template: `
//     <h2>Parent Component</h2>

//     <input [(ngModel)]="parentName" placeholder="Type in parent" />

//     <p>Parent Value: {{ parentName }}</p>

//     <hr>

//     <app-child [(name)]="parentName"></app-child>
//   `
// })
// export class AppComponent {
//   parentName = 'Rizwan';
// }
// 🔥 What happens?

// 👉 Flow:

// Parent changes → Child updates  
// Child changes → Parent updates

// ✔ Two-way binding works automatically