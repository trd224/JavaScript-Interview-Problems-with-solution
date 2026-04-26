// 🔹 What is the purpose of main.ts in Angular?

// 👉 main.ts is the entry point of an Angular application that bootstraps the root module (AppModule) to start the app.



// 🔹 Why It Is Used
// Starts the Angular application
// Loads the root module (AppModule)
// Connects Angular with the browser



// 🔹 Example
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));



// 🔹 How It Works
// Angular starts from main.ts
// Bootstraps AppModule
// Loads root component (AppComponent)
// App runs in browser