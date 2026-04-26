// 👉 One-Line Interview Answer:
// Angular’s hierarchical injection system is a tree-based dependency injection mechanism where services are provided at different levels (root, module, component), and Angular resolves them by searching from the current injector upward.


// 🔥 What is Hierarchical Injection System?

// 👉 In simple words:
// Angular creates a tree of injectors, and each level can have its own service instance.

// 👉 When a component needs a service:
// ➡ Angular looks from that component → up to parent → up to root


// 🔹 How it works (Flow)
// Component → Parent Component → Module → Root Injector

// 👉 Angular searches bottom to top





// 🔹 Example

// Service

// @Injectable({
//   providedIn: 'root'
// })
// export class MyService {}

// Component Level Provider

// @Component({
//   selector: 'app-child',
//   providers: [MyService]
// })
// export class ChildComponent {}


// 🔥 What happens?

// 👉 If service is provided in component:

// Each component gets new instance

// 👉 If provided in root:

// Whole app shares same instance





// 🔹 Hierarchy Example

// AppComponent
//  ├── ParentComponent
//  │     └── ChildComponent

// Case 1: Provided in root

// ✔ Same service instance everywhere

// Case 2: Provided in ChildComponent

// ✔ Only ChildComponent gets new instance
// ✔ Parent still uses root instance




// 🔹 Real Use Cases
// Global services → providedIn: 'root'
// Feature-specific services → module level
// Component-specific logic → component level