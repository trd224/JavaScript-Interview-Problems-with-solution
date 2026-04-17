// 🔹 What is Change Detection in Angular?

// 👉 Change Detection in Angular is the mechanism that updates the view (UI) automatically whenever the component data changes.


// 🔹 Why It Is Used
// Keeps UI and data in sync
// Automatically updates DOM
// No need for manual DOM manipulation



// 🔹 How It Works
// Data in component changes
// Angular detects the change
// Updates the DOM automatically



// 🔹 Example

// export class AppComponent {
//   name = "Rizwan";

//   changeName() {
//     this.name = "Ali";
//   }
// }


// <h1>{{ name }}</h1>
// <button (click)="changeName()">Change</button>



// 🔹 When Change Detection Runs
// User events (click, input)
// HTTP responses
// Timers (setTimeout, setInterval)



// 🔹 Types of Change Detection

// 1. Default
// Checks entire component tree
// Runs automatically

// 2. OnPush (Optimized 🔥)
// Runs only when input changes
// Better performance


// 🔹 Key Points
// Keeps data and UI synchronized
// Works automatically
// Improves developer productivity