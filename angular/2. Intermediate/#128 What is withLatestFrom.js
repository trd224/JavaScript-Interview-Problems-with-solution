// 👉 One-Line Interview Answer:
// withLatestFrom is an RxJS operator that emits values from the source Observable along with the latest value from another Observable only when the source emits.


// 🔥 What is withLatestFrom?

// 👉 In simple words:
// It takes the latest value from another Observable, but only when the main (source) Observable emits.

// 🔹 Example //here click$ is main Observable and user$ is another Observable
// this.click$.pipe(
//   withLatestFrom(this.user$)
// ).subscribe(([click, user]) => {
//   console.log(click, user);
// });



// 🔥 How it works

// 👉 Suppose:

// click$  → ---- C ---- C ---- C ----
// user$   → U1 ------- U2 ----------

// 👉 Output:

// [C, U1]  
// [C, U2]  
// [C, U2]


// ✔ Emits only when click$ emits
// ✔ Takes latest value from user$



// | Feature  | withLatestFrom      | combineLatest         |
// | -------- | ------------------- | --------------------- |
// | Trigger  | Source only         | Any Observable        |
// | Emission | Controlled          | Continuous            |
// | Use case | Event + latest data | Sync multiple streams |



// 🔹 Real Use Cases
// Button click + latest form data
// Submit action + latest state
// API call + latest user info


