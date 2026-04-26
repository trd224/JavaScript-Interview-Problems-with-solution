// 👉 One-line (your style):
// A Feature Module is an Angular module that organizes code for a specific feature or functionality of the application.



// 🔹 Simple understanding

// In Angular:

// 👉 Instead of putting everything in one place, we divide app into parts like:

// User feature
// Admin feature
// Product feature

// Each part = Feature Module


// 🔹 Example
// ✅ Admin feature module

// @NgModule({
//   declarations: [AdminComponent, DashboardComponent],
//   imports: [CommonModule]
// })
// export class AdminModule {}



// 🔹 How it is used

// @NgModule({
//   imports: [AdminModule]
// })
// export class AppModule {}



// 🔹 Types of modules (quick view)

// | Module        | Purpose            |
// | ------------- | ------------------ |
// | AppModule     | Root module        |
// | FeatureModule | Feature-based code |
// | SharedModule  | Reusable UI        |
// | CoreModule    | Singleton services |
