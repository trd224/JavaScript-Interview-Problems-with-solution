// 👉 One-Line Interview Answer:
// Hydration in Angular is the process of attaching client-side functionality to server-rendered HTML without re-rendering it.




// 🔥 What is Hydration?

// 👉 In simple words:
// Angular reuses server HTML and just adds events + logic

// 🔹 Without Hydration ❌

// SSR HTML → Angular loads → re-renders everything again 😴

// ❌ Slower
// ❌ DOM recreated

// 🔹 With Hydration ✅

// SSR HTML → Angular attaches events → ready ⚡

// ✔ No re-render
// ✔ Faster interaction

// 🔹 Example Flow

// 1. Server → sends ready HTML  
// 2. Browser → shows UI instantly  
// 3. Angular → hydrates (adds click, bindings)

// 🔹 How to Enable?

// import { provideClientHydration } from '@angular/platform-browser';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideClientHydration()
//   ]
// });



// 🔥 What gets hydrated?
// Event listeners (click, input)
// Data bindings
// Components



// 🔹 Benefits
// Faster startup ⚡
// Better performance
// No UI flicker
// Smooth SSR experience