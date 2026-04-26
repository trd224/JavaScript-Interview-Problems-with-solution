// 🔹 What is Data Binding in Angular?

// Data Binding in Angular is a way to connect data between the component (TypeScript) and the view (HTML).

// 👉 In simple words:
// Data Binding = Communication between UI and Logic

// 🔹 Why Data Binding is Important
// Keeps UI and data in sync automatically
// Reduces manual DOM manipulation
// Makes code clean and dynamic


// 🔹 Types of Data Binding in Angular

// 1. Interpolation (One-way: TS → HTML)
// <h1>{{ name }}</h1>

// 👉 Displays data from component to UI

// 2. Property Binding (One-way: TS → HTML)
// <img [src]="imageUrl">

// 👉 Sets HTML element properties dynamically

// 3. Event Binding (One-way: HTML → TS)
// <button (click)="handleClick()">Click Me</button>

// 👉 Sends user actions to component

// 4. Two-Way Data Binding (Both directions)
// <input [(ngModel)]="username">

// 👉 Data flows:

// Component → UI
// UI → Component