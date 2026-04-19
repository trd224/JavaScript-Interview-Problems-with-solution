// Interview Answer:

// We optimize an Angular application in Angular by reducing unnecessary change detection, using lazy loading, optimizing bundles, and improving data handling to make the app faster and more efficient.


// 1 reducing unnecessary change detection
// 2 using lazy loading
// 3 optimizing bundle size
// 4 improving data handling




// 🔹 Key ways to improve performance

// 1. Lazy Loading Modules 🚀

// Load only required modules when needed.

// {
//   path: 'admin',
//   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
// }



// 2. Use OnPush Change Detection ⚡

// Reduce unnecessary UI checks.

// @Component({
//   changeDetection: ChangeDetectionStrategy.OnPush
// })



// 3. Use trackBy in *ngFor 🔁

// Avoid re-rendering entire list.

// <li *ngFor="let item of items; trackBy: trackById">

// trackById(index: number, item: any) {
//   return item.id;
// }


// 4. Tree Shaking + AOT 🏗️
// Remove unused code and pre-compile app for production.


// 5. Avoid unnecessary subscriptions 🔥
// Use takeUntil or async pipe.


// 6. Optimize bundle size 📦
// Remove unused libraries
// Use lightweight packages


// 7. Use Virtual Scrolling 📜
// Render only visible items in large lists.


// 8. Pure Pipes instead of functions ⚙️
// Avoid re-execution on every change detection.
