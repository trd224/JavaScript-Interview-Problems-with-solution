// 🔹 Difference Between Observable and Promise (Angular)

// Both are used to handle asynchronous operations, but they behave very differently.



// 🔹 One-Line Interview Answer

// 👉 Observable can emit multiple values over time and is lazy and cancelable, while Promise emits a single value and executes immediately.




// 🔹 Key Differences

// | Feature          | Observable                        | Promise                  |
// | ---------------- | --------------------------------- | ------------------------ |
// | Library          | RxJS                              | Built-in JavaScript      |
// | Values           | Multiple values over time         | Single value             |
// | Execution        | Lazy (runs only on `subscribe()`) | Eager (runs immediately) |
// | Cancelable       | ✅ Yes (unsubscribe)              | ❌ No                   |
// | Operators        | Powerful (map, filter, switchMap) | Limited (.then, .catch)  |
// | Usage in Angular | Used by HttpClient, forms, events | Rarely used              |




// 🔹 Example: Promise     //Single value    

// const promise = new Promise((resolve, reject) => {
//   resolve("Data received");
// });

// promise.then(data => console.log(data));



// 🔹 Example: Observable       //Multiple values

// import { Observable } from 'rxjs';

// const observable = new Observable(observer => {
//   observer.next("Data 1");
//   observer.next("Data 2");
// });

// observable.subscribe(data => console.log(data));




// 🔹 Key Concept 🔥
// Promise → One-time result (like a single API response)
// Observable → Continuous stream (like live updates)