// ✅ Interview Answer:

// Router.navigate() is used for programmatic navigation using an array of route segments and supports relative routing, while Router.navigateByUrl() is used for navigation using a complete URL string and works as absolute navigation.`



// array of route segments means

// this.router.navigate(['/user', 1, 'details']);   //here ['/user', 1, 'details'] is array of route segments

// 👉 Angular combines it like:  /user/1/details




// 1) navigate() → “build the route step by step”

// You give Angular pieces of the route.

// this.router.navigate(['/user', 1]);

// 👉 Angular joins it like:

// /user + /1 = /user/1

// ✔ Use when:
// You are passing parameters
// You want flexibility
// You may use relative navigation



// 2) navigateByUrl() → “give full URL directly”

// You give the complete path as a string.

// this.router.navigateByUrl('/user/1');

// 👉 Angular uses it exactly as it is.

// ✔ Use when:
// You already have full URL
// You want direct navigation




// 🔹 navigate() (recommended most of the time)
// Uses array of route commands
// Supports relative navigation
// Safer and flexible

// this.router.navigate(['/users', 1]);


// 🔹 navigateByUrl()
// Uses full URL string
// Always absolute navigation
// Less flexible for dynamic routing

// this.router.navigateByUrl('/users/1');



// | Feature             | navigate()        | navigateByUrl()       |
// | ------------------- | ----------------- | --------------------- |
// | Input type          | Array of commands | String URL            |
// | Relative navigation | Yes               | No                    |
// | Flexibility         | High              | Low                   |
// | Use case            | Dynamic routing   | Direct URL navigation |


