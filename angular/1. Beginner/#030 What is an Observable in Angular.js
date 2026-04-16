// 🔹 What is an Observable in Angular?

// An Observable is a feature from RxJS used in Angular to handle asynchronous data streams.


// 🔹 One-Line Interview Answer

// 👉 An Observable is a stream of asynchronous data that can emit multiple values over time and is widely used in Angular with RxJS.




// 🔹 Why Observables Are Used
// Handle async operations (API calls, events, timers)
// Manage multiple values over time
// Work with Angular features like HttpClient



// 🔹 HttpClient Example  //👉 HttpClient returns an Observable

// this.http.get('https://api.example.com/users')
//   .subscribe(data => {
//     console.log(data);
//   });

//





// 🔹 Observable vs Promise 🔥
// | Feature    | Observable             | Promise   |
// | ---------- | ---------------------- | --------- |
// | Values     | Multiple               | Single    |
// | Execution  | Lazy (on subscribe)    | Immediate |
// | Cancelable | Yes                    | No        |
// | Operators  | Powerful (map, filter) | Limited   |
