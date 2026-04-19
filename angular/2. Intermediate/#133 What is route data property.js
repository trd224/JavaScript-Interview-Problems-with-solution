// 👉 One-Line Interview Answer:
// Route data property is used to pass static data to a route, which can be accessed inside the component using ActivatedRoute.
// similar to resolve guard


// 🔥 What is Route Data Property?

// 👉 In simple words:
// It allows us to send extra static data with a route.



// 🔹 Example (Route Config)
// {
//   path: 'profile',
//   component: ProfileComponent,
//   data: { role: 'admin', title: 'User Profile' }
// }


// 🔹 Access in Component

// constructor(private route: ActivatedRoute) {}

// ngOnInit() {
//   console.log(this.route.snapshot.data['role']);
//   console.log(this.route.snapshot.data['title']);
// }