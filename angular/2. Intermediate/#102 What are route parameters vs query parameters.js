// 🔹 What are Route Parameters vs Query Parameters?

// 👉 Route parameters are used to pass required data in the URL path, while query parameters are used to pass optional data after the ? in the URL.


// | Feature    | Route Parameters   | Query Parameters         |
// | ---------- | ------------------ | ------------------------ |
// | Purpose    | Required data      | Optional data            |
// | URL Format | `/user/1`          | `/user?id=1`             |
// | Visibility | Part of route path | After `?` in URL         |
// | Use Case   | Identify resource  | Filters, search, sorting |


// 🔹 Example


// 🔸 Route Parameters

// { path: 'user/:id', component: UserComponent }

// <a [routerLink]="['/user', 1]">User</a>


// how to get

// constructor(private route: ActivatedRoute) {}
// this.route.snapshot.params['id'];




// 🔸 Query Parameters
// <a [routerLink]="['/user']" [queryParams]="{ id: 1 }">User</a>

// how to get

// constructor(private route: ActivatedRoute) {}
// this.route.snapshot.queryParams['id'];



// 🔹 Key Difference 🔥
// Route params → Mandatory, part of path
// Query params → Optional, extra info