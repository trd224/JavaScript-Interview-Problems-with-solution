// 👉 One-Line Interview Answer:
// InjectionToken is used in Angular to create a unique token for injecting "non-class dependencies" (like values, objects, or interfaces).
// or InjectionToken is a class in Angular used to create unique tokens for dependency injection of non-class values.


// 🔥 What is InjectionToken?

// 👉 In simple words:
// It is used when we want to inject something that is NOT a class.

// 👉 Because Angular DI normally works with classes, but:

// string ❌
// object ❌
// interface ❌

// 👉 So we use InjectionToken ✔






// 🔥 Real Component Example (Step-by-Step)

// 👉 Scenario:
// We want to pass API configuration into a component using Angular DI.

// 🔹 1. Create InjectionToken
// // config.token.ts
// import { InjectionToken } from '@angular/core';

// export const APP_CONFIG = new InjectionToken<{ apiUrl: string }>('APP_CONFIG');    //here APP_CONFIG is an unique InjectionToken,


// 🔹 2. Provide Value (in App Module)
// // app.module.ts
// import { APP_CONFIG } from './config.token';

// @NgModule({
//   providers: [
//     {
//       provide: APP_CONFIG,
//       useValue: { apiUrl: 'https://api.example.com' }
//     }
//   ]
// })
// export class AppModule {}


// 🔹 3. Use in Real Component
// // demo.component.ts
// import { Component, Inject } from '@angular/core';
// import { APP_CONFIG } from './config.token';

// @Component({
//   selector: 'app-demo',
//   template: `<p>API URL: {{ apiUrl }}</p>`
// })
// export class DemoComponent {

//   apiUrl: string;

//   constructor(@Inject(APP_CONFIG) config: { apiUrl: string }) {
//     this.apiUrl = config.apiUrl;
//   }
// }



// 🔥 What happens here?

// ✔ Angular injects { apiUrl: 'https://api.example.com' }
// ✔ Component receives it via constructor
// ✔ UI displays API URL

// 🔹 Output
// API URL: https://api.example.com




// if we want to pass a value on multiple compoennt
// 🔹 When to use Service

// 👉 Use service when:

// Data is dynamic
// Logic is involved
// API calls are needed

// ✔ Example:

// getUsers() { return this.http.get(...); }

// 🔹 When to use InjectionToken

// 👉 Use InjectionToken when:

// Data is static (config)
// No logic needed
// Just value injection

// ✔ Example:

// API_URL = 'https://api.com'