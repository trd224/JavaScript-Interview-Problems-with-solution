// 👉 One-Line Interview Answer:
// forkJoin is an RxJS operator that runs multiple Observables in parallel and emits a single combined result when all of them complete.

// forkJoin is similar to Promise.all() because both wait for all async operations to complete and then return combined results.


// 🔥 What is forkJoin?

// 👉 In simple words:
// It waits for all API calls to finish, then gives all results together.

// forkJoin([
//   this.http.get('/api/user'),
//   this.http.get('/api/orders')
// ]).subscribe(([user, orders]) => {
//   console.log(user);
//   console.log(orders);
// });


// 🔥 What happens?
// API 1 (user)   → done  
// API 2 (orders) → done  
// ------------------------
// Result → both together

// ✔ Executes in parallel
// ✔ Returns result only when ALL complete


// 🔹 Important Rule

// 👉 All Observables must complete

// ❌ If one fails → whole forkJoin fails
// ❌ If one never completes → no result





// 🔹 Example

// Promise.all()

// Promise.all([
//   fetch('/api/user'),
//   fetch('/api/orders')
// ]).then(([user, orders]) => {
//   console.log(user, orders);
// });

// forkJoin()

// forkJoin([
//   this.http.get('/api/user'),
//   this.http.get('/api/orders')
// ]).subscribe(([user, orders]) => {
//   console.log(user, orders);
// });


// | Feature        | Promise.all | forkJoin              |
// | -------------- | ----------- | --------------------- |
// | Works with     | Promises    | Observables           |
// | Cancel support | ❌ No        | ✅ Yes                 |
// | Stream support | ❌ No        | ✅ Yes                 |
// | Emits          | Once        | Once (after complete) |
