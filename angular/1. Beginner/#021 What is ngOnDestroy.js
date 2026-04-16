// 🔹 What is ngOnDestroy in Angular?

// ngOnDestroy is a lifecycle hook that is called just before a component is destroyed (removed from the DOM).



// 🔹 Why It Is Used
// Prevent memory leaks
// Unsubscribe from Observables
// Remove event listeners
// Clear timers (setInterval / setTimeout)



// import { Component, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<p>Demo Component</p>`
// })
// export class DemoComponent implements OnDestroy {

//   ngOnDestroy() {
//     console.log("Component destroyed");
//   }
// }