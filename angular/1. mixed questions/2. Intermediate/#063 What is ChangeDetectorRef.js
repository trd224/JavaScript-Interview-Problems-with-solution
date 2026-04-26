// 🔹 What is ChangeDetectorRef in Angular?

// 👉 ChangeDetectorRef is a service in Angular used to manually control and trigger change detection in a component.


// 🔹 Why Use It
// Manually update UI
// Work with OnPush strategy
// Optimize performance



// 🔹 Common Methods
// markForCheck() → Marks component to be checked
// detectChanges() → Runs change detection immediately
// detach() → Stops automatic change detection
// reattach() → Re-enables change detection


// 👉 markForCheck() schedules a check for OnPush components, while detectChanges() immediately runs change detection for that component.


// 🔹 Example
// import { Component, ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<p>{{ data }}</p>`
// })
// export class DemoComponent {
//   data = "Hello";

//   constructor(private cd: ChangeDetectorRef) {}

//   update() {
//     this.data = "Updated";
//     this.cd.detectChanges(); // manually update UI
//   }
// }


// 🔹 With OnPush Example 🔥
// this.data = "New Value";
// this.cd.markForCheck(); // triggers update in OnPush




// 🔹 🧠 Simple Understanding

// 🔸 markForCheck() = “Hey Angular, check me later”
// Does NOT run immediately
// Waits for next change detection cycle
// Mostly needed in OnPush

// 🔸 detectChanges() = “Check me RIGHT NOW”
// Runs instantly
// Forces UI update
// Works everywhere

// 🔹 Example (OnPush Case 🔥)
// this.data = "Updated";
// this.cd.markForCheck(); // UI updates in next cycle


// 🔹 When to Use
// ✅ Use markForCheck() → OnPush + async updates
// ✅ Use detectChanges() → urgent UI update