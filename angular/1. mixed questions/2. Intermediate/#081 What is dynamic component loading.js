// Dynamic Component Loading in Angular is a technique where a component is created and inserted into the DOM at runtime instead of being declared in the template.

// 👉 One-line (as you prefer):
// Dynamic component loading is a process of creating and rendering components programmatically at runtime.


// 🔹 Why we use it
// Show components based on conditions (like popup, modal, alerts)
// Load components lazily
// Improve performance (only load when needed)


// 🔹 Example 

// @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

// constructor(private injector: Injector) {}

// loadComponent() {
//   this.container.clear();
//   const componentRef = this.container.createComponent(MyComponent);
// }

// html 
// <ng-container #container></ng-container>


// 🔹 Simple understanding
// Static → <app-child></app-child> (fixed in HTML)
// Dynamic → Created using code when needed


// 🔹 Simple analogy
// MyComponent = blueprint 🏗️
// createComponent() = actually building the house 🏠



// A component being declared in an NgModule only registers it, it does NOT create its instance or render it.

// When you add MyComponent in an NgModule:

// @NgModule({
//   declarations: [MyComponent]
// })


// 👉 This means:

// Angular knows about the component
// It can compile it
// It can be used when needed

// ❌ But:

// It is NOT created
// It is NOT added to DOM



// 🔹 When is it actually created?

// Only in 2 cases:

// Static way (template)
// <app-my></app-my>

// Dynamic way (runtime)
// this.container.createComponent(MyComponent);


// 🔹 Real meaning

// | Thing                 | Status    |
// | --------------------- | --------- |
// | Class (MyComponent)   | ✅ Exists  |
// | NgModule registration | ✅ Done    |
// | Instance in memory    | ❌ Not yet |
// | DOM rendering         | ❌ Not yet |


// 👉 After this line:
// this.container.createComponent(MyComponent);

// | Thing    | Status     |
// | -------- | ---------- |
// | Instance | ✅ Created  |
// | DOM      | ✅ Inserted |
