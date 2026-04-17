// 🔹 What is switchMap?

// 👉 switchMap is an RxJS operator that maps to a new Observable and cancels the previous one when a new value is emitted.


// 🔹 Why Use switchMap?
// Avoid multiple unnecessary API calls
// Always use latest request
// Automatically cancels previous requests



// 🔹 Example (Important 🔥)

// Without switchMap ❌

// this.searchInput.valueChanges.subscribe(value => {
//   this.http.get('/api/search?q=' + value).subscribe();
// });

// 👉 Problem:

// Multiple API calls
// Old responses may override new ones


// With switchMap ✅
// this.searchInput.valueChanges
//   .pipe(
//     switchMap(value => this.http.get('/api/search?q=' + value))
//   )
//   .subscribe(data => console.log(data));

// 👉 Benefit:

// Cancels previous API call
// Only latest result is used



// 🔹 How It Works
// Input:  A → B → C

// switchMap:
// - Cancels A ❌
// - Cancels B ❌
// - Executes only C ✅