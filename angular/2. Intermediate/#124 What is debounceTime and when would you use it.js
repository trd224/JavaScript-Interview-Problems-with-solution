// 👉 One-Line Interview Answer:
// debounceTime is an RxJS operator that delays emitting values until a specified time has passed without any new event, and we use it to reduce frequent calls like API requests during typing.


// 🔥 What is debounceTime?

// 👉 In simple words:
// It waits for a pause in events, then emits the latest value.



// 🔹 Example (Search Input)
// this.searchControl.valueChanges
//   .pipe(debounceTime(500))
//   .subscribe(value => {
//     console.log(value);
//   });


// 🔥 What happens?

// 👉 User types:

// a → ab → abc → abcd

// 👉 With debounceTime(500):

// ✔ Waits 500ms after typing stops
// ✔ Emits only "abcd"



// 🔹 Without debounceTime ❌
// API call → a  
// API call → ab  
// API call → abc  
// API call → abcd  

// ❌ Too many API calls



// 🔹 With debounceTime ✅
// API call → abcd (only once)

// ✔ Optimized performance


// 🔹 When to use?
// Search input 🔍
// Auto-suggestions
// Form input validation
// Button click prevention (rapid clicks)
// Scroll/resize events