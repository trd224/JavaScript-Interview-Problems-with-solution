// 🔹 What is ng-container in Angular?

// 👉 ng-container is a grouping element in Angular that does not render any extra DOM element but is used to apply structural directives.

// 🔹 Why Use ng-container?
// Avoid unnecessary HTML elements
// Group multiple elements
// Use structural directives like *ngIf, *ngFor

// 🔹 Example

// <ng-container *ngIf="isLoggedIn">
//   <h1>Welcome</h1>
//   <p>User Dashboard</p>
// </ng-container>


// 👉 If true → content shows
// 👉 No extra <div> added in DOM



// 🔹 Without ng-container ❌

// <div *ngIf="isLoggedIn">
//   <h1>Welcome</h1>
// </div>

// 👉 Adds extra <div> in DOM



// 🔹 Multiple Directives Use Case 🔥

// <ng-container *ngFor="let item of items">
//   <p *ngIf="item.active">{{ item.name }}</p>
// </ng-container>