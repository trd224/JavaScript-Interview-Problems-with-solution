// 🔹 Difference between mergeMap, switchMap, concatMap, and exhaustMap

// 👉 These are RxJS operators used to handle multiple Observables differently (parallel, cancel, queue, ignore).



// 🔹 Core One-Line Difference 🔥
// mergeMap → Run all requests in parallel
// switchMap → Cancel previous, keep latest
// concatMap → Run one by one (queue)
// exhaustMap → Ignore new until current finishes


// | Operator   | Behavior                     | Use Case             |
// | ---------- | ---------------------------- | -------------------- |
// | mergeMap   | All run in parallel          | Multiple API calls   |
// | switchMap  | Cancel previous, keep latest | Search input         |
// | concatMap  | Queue (one after another)    | Ordered tasks        |
// | exhaustMap | Ignore new until done        | Prevent double click |



// 🔹 Visual Understanding

// 🔸 mergeMap
// A → B → C  
// All run together ✅

// 🔸 switchMap
// A → B → C  
// A ❌ B ❌ C ✅

// 🔸 concatMap
// A → B → C  
// A → then B → then C ✅

// 🔸 exhaustMap
// A → B → C  
// A ✅ (B & C ignored ❌)



// 🔹 Real Examples 🔥
// mergeMap → Load multiple products
// switchMap → Search bar API
// concatMap → Upload files one by one
// exhaustMap → Prevent multiple form submits
