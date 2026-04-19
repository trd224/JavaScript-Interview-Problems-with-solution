// Interview Answer:

// zone.js automatically detects async changes and triggers change detection, while zoneless Angular requires manual control over change detection without relying on zone.js.



// 🔹 In Angular

// ✅ zone.js (default behavior)

// Angular uses zone.js
// It patches async APIs (setTimeout, promises, events)
// Automatically runs change detection

// 👉 Example:

// setTimeout(() => {
//   this.name = 'Rizwan'; // UI updates automatically
// }, 1000);

// ✔ No extra work needed




// ❌ Zoneless Angular

// Angular runs without zone.js
// No automatic change detection

// 👉 You must manually trigger it:

// constructor(private cd: ChangeDetectorRef) {}

// update() {
//   this.name = 'Rizwan';
//   this.cd.detectChanges(); // manually update UI
// }