// 🔹 What is Angular's Default Change Detection Strategy?

// 👉 Angular’s default change detection strategy is Default, which checks the entire component tree whenever any change occurs.


// 🔹 How It Works
// Runs on every change detection cycle
// Checks all components from top to bottom
// Updates UI if any data changes



// 🔹 When It Triggers
// User events (click, input)
// HTTP responses
// Timers (setTimeout, setInterval)



// 🔹 Example  //👉 Angular automatically updates UI when name changes

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `<h1>{{ name }}</h1>`
// })
// export class AppComponent {
//   name = "Rizwan";

//   changeName() {
//     this.name = "Ali";
//   }
// }




// 🔹 Key Points
// Default strategy = ChangeDetectionStrategy.Default
// Checks whole component tree
// Easy to use but less optimized


// 🔹 Alternative 🔥
// OnPush → Checks only when input changes (better performance)




//✅ Full Example of OnPush

// 🔹 1. Child Component (OnPush)

// import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   template: `
//     <h3>Child Component</h3>
//     <p>{{ user.name }}</p>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class ChildComponent {
//   @Input() user: any;
// }