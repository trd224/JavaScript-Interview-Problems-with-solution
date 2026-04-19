// 👉 One-Line Interview Answer:
// signal() is a simple "reactive state" for UI updates in Angular, while BehaviorSubject is an RxJS stream used for handling asynchronous data and events.


// 🔥 signal() vs BehaviorSubject

// 👉 In simple words:

// signal() → simple state (UI reactivity)
// BehaviorSubject → data stream (async flow)




// 🔹 signal()
// count = signal(0);
// count.set(1);
// console.log(count());

// ✔ No subscribe
// ✔ Direct value access
// ✔ Automatic UI update



// 🔹 BehaviorSubject
// count$ = new BehaviorSubject(0);

// count$.next(1);

// count$.subscribe(value => {
//   console.log(value);
// });

// ✔ Requires subscribe
// ✔ Works with streams
// ✔ Async handling



// | Feature    | signal()     | BehaviorSubject  |
// | ---------- | ------------ | ---------------- |
// | Type       | State        | Stream           |
// | Sync/Async | Sync         | Async            |
// | Subscribe  | ❌ Not needed | ✅ Required       |
// | Usage      | UI state     | Data streams/API |
// | Complexity | Simple       | Advanced         |
