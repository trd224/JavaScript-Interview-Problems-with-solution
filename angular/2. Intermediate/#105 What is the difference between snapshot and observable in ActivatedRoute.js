// 👉 One-Line Interview Answer:
// snapshot gives a one-time static value from the route, while Observable (params/queryParams) continuously emits updated values whenever the route changes.


// 🔹 What is the difference between Snapshot and Observable in ActivatedRoute?

// 👉 In simple words:

// snapshot = take value once (no updates)
// observable = keep watching changes (auto updates)




// 🔹 ActivatedRoute Snapshot
// const id = this.route.snapshot.params['id'];



// 🔹 ActivatedRoute Observable
// this.route.params.subscribe(params => {
//   console.log(params['id']);
// });



// | Feature      | Snapshot      | Observable            |
// | ------------ | ------------- | --------------------- |
// | Type         | Static        | Dynamic               |
// | Updates      | ❌ No          | ✅ Yes                 |
// | Subscription | ❌ No          | ✅ Yes                 |
// | Best for     | One-time read | Route change handling |
