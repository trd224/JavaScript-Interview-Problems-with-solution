// RxJS Subject is a special type of Observable from RxJS that allows us to both send data and receive data, and it can share the same data with multiple subscribers at the same time.


// 🔹 Explanation (simple + complete)
// Subject is part of RxJS
// It works as:
// ✅ Observable → we can subscribe to it
// ✅ Observer → we can send data using .next()

// 👉 That’s why it is called a special Observable



// 🔹 Key points (interview focus)
// Allows us to emit data manually
// Allows us to send data to multiple subscribers
// Used for component/service communication



// 🔹 Real Example (Service + Component) in Angular

// ✅ Service (data sender)

// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   private messageSubject = new Subject<string>();

//   message$ = this.messageSubject.asObservable();

//   sendMessage(msg: string) {
//     this.messageSubject.next(msg); // send data
//   }
// }


// ✅ Component A (send data)

// constructor(private dataService: DataService) {}

// send() {
//   this.dataService.sendMessage('Hello from A');
// }


// ✅ Component B (receive data)

// constructor(private dataService: DataService) {}

// ngOnInit() {
//   this.dataService.message$.subscribe(msg => {
//     console.log(msg); // receive data
//   });
// }


// 🔹 Flow (very important)

// 👉 Component A → Service (Subject.next()) → Component B