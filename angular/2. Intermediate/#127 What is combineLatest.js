// 👉 One-Line Interview Answer:
// combineLatest is an RxJS operator that combines multiple Observables and emits the latest values from all whenever any of them changes.

// 🔥 What is combineLatest?

// 👉 In simple words:
// It gives latest values from all Observables whenever any one changes.


// 🔹 Example

// combineLatest([
//   this.user$,
//   this.settings$
// ]).subscribe(([user, settings]) => {
//   console.log(user, settings);
// });


// 🔥 How it works

// 👉 Suppose:

// user$     → emits: A ----- B --------
// settings$ → emits: X -------- Y -----

// 👉 Output:

// [A, X]  
// [B, X]  
// [B, Y]


// ✔ Emits every time any Observable updates
// ✔ Always gives latest values from all