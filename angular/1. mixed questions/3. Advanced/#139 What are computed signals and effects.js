// 👉 One-Line Interview Answer:
// Computed signals derive values from other signals, while effects run side-effect logic automatically when signals change.


// 🔥 What are Computed Signals?

// 👉 In simple words:
// Computed = calculated value based on other signals


// 🔹 Example
// count = signal(10);

// double = computed(() => this.count() * 2);
// <p>{{ double() }}</p>

// ✔ When count changes → double updates automatically


// 🔥 What are Effects?

// 👉 In simple words:
// Effect = run code automatically when signal changes

// 🔹 Example
// effect(() => {
//   console.log(this.count());
// });

// ✔ Runs whenever count changes



// | Feature  | computed     | effect                        |
// | -------- | ------------ | ----------------------------- |
// | Purpose  | Return value | Perform action                |
// | Output   | Value        | No return                     |
// | Use case | UI data      | Side effects (log, API, etc.) |




// 🔹 Combined Example
// count = signal(5);

// double = computed(() => this.count() * 2);

// effect(() => {
//   console.log('Count changed:', this.count());
// });



// 🔥 Flow
// count changes → computed updates → effect runs
