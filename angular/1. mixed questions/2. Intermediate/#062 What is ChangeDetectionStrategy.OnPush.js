// 🔹 What is ChangeDetectionStrategy.OnPush?

// 👉 ChangeDetectionStrategy.OnPush is an Angular change detection strategy that updates the component only when its input properties change or when triggered manually.



// 🔹 Why Use OnPush?
// Improves performance
// Reduces unnecessary checks
// Optimizes large applications



// 🔹 How It Works

// Angular checks component only when:

// @Input() value changes
// Event occurs inside component
// Observable emits new value
// Manually triggered (markForCheck())



// 🔹 Key Points
// Does not check entire component tree
// Runs only on specific triggers
// Better performance than Default



// 👉 OnPush updates the UI only when the object reference changes, not when internal values change.


// 🔹 Example Setup

// Child Component (OnPush)

// import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `<p>{{ user.name }}</p>`,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ChildComponent {
//   @Input() user!: any;
// }

// Parent Component

// @Component({
//   selector: 'app-parent',
//   template: `
//     <app-child [user]="user"></app-child>
//     <button (click)="changeName()">Change Name</button>
//   `
// })
// export class ParentComponent {
//   user = { name: "Rizwan" };

//   changeName() {
//     this.user.name = "Ali"; // ❌ will NOT update UI
//   }
// }



// 🔹 What Happens ❌
// Button clicked
// user.name changes
// BUT UI does NOT update

// 👉 Because object reference is same


// 🔹 Fix (Correct Way ✅)
// changeName() {
//   this.user = { ...this.user, name: "Ali" }; // ✅ new reference
// }



// 🔹 What Happens Now ✅
// New object created
// Angular detects reference change
// UI updates ✔️





// 🔹 Another Example (Array)
// ❌ Wrong
// this.items.push("New Item");

// 👉 UI may NOT update

// ✅ Correct
// this.items = [...this.items, "New Item"];

// 👉 UI updates


// 🔹 Key Rule 🔥

// 👉 OnPush works only with reference change, not mutation
