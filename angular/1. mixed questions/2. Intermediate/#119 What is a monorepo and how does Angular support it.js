// 👉 One-Line Interview Answer:
// A monorepo is a single repository that contains multiple projects or apps, and Angular supports it using Angular CLI workspaces where multiple apps and libraries can be managed together.


// 🔥 What is Monorepo?

// 👉 In simple words:
// Monorepo = one project folder → multiple apps + libraries



// Example Structure
// workspace/
//  ├── apps/
//  │    ├── app1/
//  │    ├── app2/
//  ├── libs/
//  │    ├── shared-ui/
//  │    ├── core-services/
//  ├── angular.json

// 👉 Everything in one repo



// 🔹 Why use Monorepo?
// Share code easily
// Maintain everything in one place
// Reuse components/services
// Better version control




// 🔥 How Angular supports Monorepo?

// 👉 Angular CLI provides Workspace system

// 🔹 Create Workspace
// ng new my-workspace --create-application=false

// 🔹 Add multiple apps
// ng generate application app1
// ng generate application app2

// 🔹 Create shared library
// ng generate library shared-ui




// 🔥 What Angular gives in Monorepo
// Multiple apps in one project
// Shared libraries
// Single angular.json config
// Easy build & serve commands



// 🔹 Real Example

// 👉 Company project:

// Admin app
// User app
// Shared UI library

// ✔ All inside one repo
// ✔ Shared code reused