// 👉 One-Line Interview Answer:
// subscribe() is used to manually listen to an Observable in TypeScript and requires manual unsubscribe, while the async pipe automatically subscribes and unsubscribes in the template.


// 🔥 What is the difference between subscribe() and async pipe?

// 👉 In simple words:

// subscribe() = manual handling
// async pipe = automatic handling




// 🔹 subscribe() (Manual Way)

// 👉 Used in TypeScript

// Example

// this.userService.getUsers().subscribe(data => {
//   this.users = data;
// });

// Key Points
// Manual subscription
// Need to unsubscribe (important ❗)
// More control over data
// Risk of memory leaks





// 🔹 async pipe (Automatic Way)

// 👉 Used in HTML template

// Example

// <div *ngFor="let user of users$ | async">
//   {{ user.name }}
// </div>

// 🔹 Key Points
// Auto subscribe & unsubscribe
// No memory leak
// Cleaner code
// Works directly in template




// | Feature          | subscribe() | async pipe    |
// | ---------------- | ----------- | ------------- |
// | Usage            | TypeScript  | HTML Template |
// | Subscription     | Manual      | Automatic     |
// | Unsubscribe      | Required    | Not required  |
// | Memory leak risk | ❌ Yes       | ✅ No          |
// | Code cleanliness | Less        | More          |
