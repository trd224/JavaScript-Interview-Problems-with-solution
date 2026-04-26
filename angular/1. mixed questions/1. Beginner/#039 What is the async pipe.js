// 🔹 What is Async Pipe?

// 👉 Async pipe is a built-in Angular pipe used to automatically subscribe and unsubscribe from Observables or Promises and display their values in the template.


// 🔹 Why Use Async Pipe?
// Automatically subscribes to data
// Automatically unsubscribes (prevents memory leaks)
// No need to manually use subscribe()
// Makes code cleaner


// 🔹 Example (Observable)
// Component

// import { HttpClient } from '@angular/common/http';

// export class AppComponent {
//   users$ = this.http.get('https://api.example.com/users');

//   constructor(private http: HttpClient) {}
// }


// Template //👉 Async pipe automatically handles subscription

// <ul>
//   <li *ngFor="let user of users$ | async">
//     {{ user.name }}
//   </li>
// </ul>



// 🔹 Example (Promise)

// data = new Promise(resolve => {
//   setTimeout(() => resolve("Hello Async Pipe"), 2000);
// });

// <p>{{ data | async }}</p>



// 🔹 Without Async Pipe    //You must manually handle subscription and cleanup

// this.users$.subscribe(data => {
//   this.users = data;
// });


// 🔹 Key Points
// Works with Observables and Promises
// Automatically manages subscription lifecycle
// Prevents memory leaks
// Used directly in template