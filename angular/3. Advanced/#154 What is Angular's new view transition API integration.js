// 👉 One-Line Interview Answer:
// Angular’s View Transition API integration enables smooth animations between route or UI changes using the browser’s native View Transitions API.

// 🔥 What is View Transition API in Angular?

// 👉 In simple words:
// It adds smooth page/route animations automatically

// 🔹 Without View Transition ❌
// Navigate → old page disappears → new page appears (no animation)
// 🔹 With View Transition ✅
// Navigate → smooth animation → new page loads ✨

// ✔ Better user experience



// 🔹 How to Enable?
// import { provideRouter, withViewTransitions } from '@angular/router';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes, withViewTransitions())
//   ]
// });