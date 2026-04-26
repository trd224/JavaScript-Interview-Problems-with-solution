// 👉 One-Line Interview Answer:
// ApplicationConfig is used in standalone Angular to configure global providers like routing, HTTP, and other services during app bootstrap.



// 🔥 What is ApplicationConfig?

// 👉 In simple words:
// It is a central configuration object for the app

// 👉 Used instead of:

// AppModule.providers




// 🔹 Example
// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes)
//   ]
// };


// 🔹 Use in main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { appConfig } from './app.config';

// bootstrapApplication(AppComponent, appConfig);




// 🔹 Real Example
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient()
//   ]
// };