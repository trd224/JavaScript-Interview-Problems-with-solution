// 🔹 What are RxJS Operators?

// 👉 RxJS operators are functions used to transform, filter, and manipulate data streams (Observables) in Angular.


// 🔹 Why Use Operators?
// Modify data
// Filter values
// Handle async flows easily
// Chain multiple operations



// 🔹 Common RxJS Operators 🔥

// 🔸 Transformation
// map() → Transform data
// map(value => value * 2)

// 🔸 Filtering
// filter() → Allow specific values
// filter(value => value > 10)

// 🔸 Switching
// switchMap() → Cancel previous request, use latest

// 🔸 Merging
// mergeMap() → Run multiple requests together

// 🔸 Combination
// combineLatest() → Combine multiple observables

// 🔸 Utility
// tap() → Side effects (log, debug)
// tap(value => console.log(value))

// 🔸 Error Handling
// catchError() → Handle errors

// 🔹 Example

// this.http.get('/api')
//   .pipe(
//     map(data => data),
//     catchError(err => throwError(err))
//   )
//   .subscribe();

// 🔹 Key Points

// Used with .pipe()
// Chain multiple operations
// Core part of RxJS