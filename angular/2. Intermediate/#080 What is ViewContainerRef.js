// 🔹 What is ViewContainerRef in Angular?

// 👉 ViewContainerRef is a class in Angular used to dynamically create, insert, and manage views (components or templates) in the DOM.

// 🔹 Why Use It
// Create components dynamically
// Insert/remove templates at runtime
// Build dynamic UI (modals, popups)


// 🔹 Example (create Dynamic Component)  // "MyComponent is created dynamically inside this component."

// import { Component, ViewChild, ViewContainerRef } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<ng-container #container></ng-container>`
// })
// export class DemoComponent {

//   @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

//   loadComponent() {
//     this.container.clear();
//     this.container.createComponent(MyComponent);
//   }

//  clear() {
//   this.container.clear(); // remove everything
//  }
// }


// 🔹 🧩 HTML Template

// <!-- Button to load component -->
// <button (click)="loadComponent()">Load Component</button>

// <!-- Button to clear -->
// <button (click)="clear()">Clear</button>

// <hr>

// <!-- Placeholder -->
// <ng-container #container></ng-container>


// 🔹 🧱 My Component

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my',
//   template: `<p style="color: green;">I am dynamically loaded!</p>`
// })
// export class MyComponent {}


// 🔹 How It Works
// ViewContainerRef acts like a placeholder
// You can insert/remove views dynamically
// Works with ng-container or templates




// 🔹 🔥 Template Version (ng-template)

// HTML

// <ng-template #myTemplate>
//   <p>Hello from Template 🚀</p>
// </ng-template>

// <button (click)="showTemplate()">Show Template</button>

// <ng-container #container></ng-container>

// TS

// @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

// @ViewChild('myTemplate') template!: any;

// showTemplate() {
//   this.container.clear();
//   this.container.createEmbeddedView(this.template);
// }


// 👉 Initially nothing is shown, and when the button is clicked, the template content is inserted into the ng-container.

