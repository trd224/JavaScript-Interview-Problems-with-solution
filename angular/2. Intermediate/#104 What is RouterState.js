// 🔹 What is RouterState in Angular?

// 👉 RouterState is a tree representation of the application’s routes that contains information about the current navigation state of the Angular router.

// tree representation of the application’s routes that contains information about the current navigation


// 🔹 Why It Is Used
// Represents full route structure
// Helps track active route hierarchy
// Provides snapshot of navigation state


// 🔹 How It Works
// Angular builds a tree of activated routes
// Each route in the tree is called a RouterState
// It reflects the current URL structure



// 🔹 Example

// import { Router, RouterState } from '@angular/router';

// constructor(private router: Router) {}

// ngOnInit() {
//   const state: RouterState = this.router.routerState;
//   console.log(state);
// }

// Output (Conceptual)
// You will get an object like this:

// RouterState {
//   root: ActivatedRoute {
//     url: [...],
//     params: {...},
//     data: {...},
//     firstChild: ...
//   }
// }



// 🔹 If You Use Snapshot

// ngOnInit() {
//    const snapshot = this.router.routerState.snapshot;
//    console.log(snapshot.url);
// }

// Output example:
// /user/1
