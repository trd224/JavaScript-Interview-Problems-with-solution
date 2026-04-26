// 🔹 What is RouterLink in Angular?

// RouterLink is a directive used to navigate between routes (pages) in an Angular application.



// 🔹 Syntax
// <a routerLink="/path">Link</a>



// 🔹 How It Works
// Updates the URL
// Loads component inside <router-outlet>
// No page refresh (SPA behavior)



// 🔹 Dynamic Routing Example
// <a [routerLink]="['/user', userId]">View User</a>



// 🔹 Active Link Styling
// <a routerLink="/home" routerLinkActive="active">Home</a>



// 🔹 routerLink vs href 🔥
// | Feature     | routerLink         | href             |
// | ----------- | ------------------ | ---------------- |
// | Reload Page | ❌ No               | ✅ Yes            |
// | Type        | Angular navigation | Normal HTML link |
// | SPA Support | ✅ Yes              | ❌ No             |
