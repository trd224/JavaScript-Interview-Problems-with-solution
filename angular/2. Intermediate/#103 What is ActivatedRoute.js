// 🔹 What is ActivatedRoute in Angular?

// 👉 ActivatedRoute is a service in Angular used to access information about the currently active route like route parameters, query parameters, and route data.


// 🔹 Simple Example:

// constructor(private route: ActivatedRoute) {}


// Access route parameters:

// this.route.params.subscribe(params => {
//   console.log(params['id']);
// });


// Access query parameters:

// this.route.queryParams.subscribe(params => {
//   console.log(params['id']);
// });




// 🔹 1. snapshot.queryParams

// this.route.snapshot.queryParams['id']

// Gives current value only once
// ❌ Does NOT update if query params change
// Good for initial load / one-time read

// 👉 Interview answer:

// Snapshot is a static way to read query params once.


// 🔹 2. queryParams.subscribe()

// this.route.queryParams.subscribe(params => {
//   console.log(params['id']);
// });

// Works as an Observable
// ✅ Updates whenever query params change
// Good for dynamic route changes without reloading component

// 👉 Interview answer:

// queryParams is observable and emits new values when route params change.




// | Feature           | snapshot      | subscribe       |
// | ----------------- | ------------- | --------------- |
// | Type              | Static        | Reactive        |
// | Updates on change | ❌ No          | ✅ Yes           |
// | Use case          | One-time read | Dynamic updates |
