// 👉 One-Line Interview Answer:
// NgZone is an Angular service that manages execution inside or outside Angular’s zone to control change detection and improve performance.


// 🔥 What is NgZone?

// 👉 In simple words:
// NgZone helps Angular know when to update the UI.

// 👉 It wraps async operations like:

// setTimeout
// HTTP calls
// events





// 🔹 Why do we need NgZone?

// 👉 Angular runs change detection when async tasks finish

// ✔ Updates UI automatically

// 👉 But sometimes:

// Too many updates ❌
// Performance issues ❌

// 👉 So we control it using NgZone




// 🔹 Example
// import { Component, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<p>{{ count }}</p>`
// })
// export class DemoComponent {

//   count = 0;

//   constructor(private ngZone: NgZone) {}

//   ngOnInit() {
//     this.ngZone.runOutsideAngular(() => {
//       setInterval(() => {
//         this.count++; // UI will NOT update automatically
//       }, 1000);
//     });
//   }
// }






// 🔥 Key Methods
// 1️⃣ run()

// 👉 Executes inside Angular zone → triggers UI update

// this.ngZone.run(() => {
//   this.count++;
// });

// 2️⃣ runOutsideAngular()

// 👉 Executes outside Angular → NO change detection

// this.ngZone.runOutsideAngular(() => {
//   // heavy task
// });



// 🔹 Real Use Cases
// Performance optimization
// Avoid unnecessary change detection
// Handle heavy tasks (scroll, animations)
// Third-party libraries integration



// 🔥 Simple Understanding
// Inside zone → UI updates
// Outside zone → no UI update