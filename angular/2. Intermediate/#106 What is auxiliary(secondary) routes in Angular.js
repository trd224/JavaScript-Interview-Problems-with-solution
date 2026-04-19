// 👉 One-Line Interview Answer:
// Auxiliary (secondary) routes in Angular allow us to display multiple components at the same time in different router outlets without changing the main page.


// 🔥 Let’s understand with Component + Routing Module Example

// We will build a simple case:

// 👉 Home page + Chat sidebar at same time

// 🔹 1. Components
// 🧩 HomeComponent (Main Page)

// @Component({
//   selector: 'app-home',
//   template: `<h2>Home Page</h2>`
// })
// export class HomeComponent {}

// 🧩 ChatComponent (Secondary / Sidebar)

// @Component({
//   selector: 'app-chat',
//   template: `<h3>Chat Window</h3>`
// })
// export class ChatComponent {}


// 🔹 2. App Component HTML (Important)

// 👉 We define two router outlets

// <!-- Primary outlet -->
// <router-outlet></router-outlet>

// <!-- Secondary outlet -->
// <router-outlet name="chat"></router-outlet>


// 🔹 3. App Routing Module
// const routes: Routes = [
//   // Primary route
//   { path: 'home', component: HomeComponent },

//   // Secondary route (IMPORTANT 🔥)
//   {
//     path: 'chat',
//     component: ChatComponent,
//     outlet: 'chat'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


// 🔹 4. Navigation (How we open both)
// 👉 Open Home page
// this.router.navigate(['/home']);

// ✔ Only HomeComponent loads

// 👉 Open Chat ALSO (Secondary route)
// this.router.navigate([{ outlets: { chat: ['chat'] } }]);

// 🔹 5. Final URL
// /home(chat:chat)