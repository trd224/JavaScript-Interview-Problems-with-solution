// 👉 One-Line Interview Answer:
// Router preloading strategy is a technique in Angular that loads lazy-loaded modules in the background after the app is loaded to improve navigation speed.


// 🔥 What is Router Preloading Strategy?

// 👉 In simple words:
// It loads lazy modules in background so user doesn’t wait later.




// 🔹 Problem without Preloading ❌

// User clicks → load module → delay 😴

// 👉 Each lazy module loads only when needed → slow navigation



// 🔹 With Preloading ✅

// App loads → background loads modules → instant navigation ⚡

// ✔ Faster user experience




// 🔹 How to Enable?

// import { PreloadAllModules, RouterModule } from '@angular/router';

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       preloadingStrategy: PreloadAllModules
//     })
//   ]
// })
// export class AppModule {}





// 🔹 Types of Preloading

// 1️⃣ NoPreloading (Default)

// 👉 Loads module only when route is visited

// 2️⃣ PreloadAllModules

// 👉 Loads all lazy modules in background

// 3️⃣ Custom Strategy

// 👉 Load selected modules based on logic




// 🔹 Example
// {
//   path: 'admin',
//   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
// }

// ✔ With preloading → loads after app startup




// 🔹 Key Points
// Works with lazy loading
// Improves navigation speed
// Runs in background
// Configurable strategy