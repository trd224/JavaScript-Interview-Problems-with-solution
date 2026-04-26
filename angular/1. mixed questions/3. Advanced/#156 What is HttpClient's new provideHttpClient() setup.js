// 👉 One-Line Interview Answer:
// provideHttpClient() is a standalone API used to configure and provide HttpClient without importing HttpClientModule.



// 🔥 What is provideHttpClient()?

// 👉 In simple words:
// It replaces:

// HttpClientModule ❌

// 👉 With:

// provideHttpClient() ✅





// 🔹 Example (Standalone Setup)

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient()
//   ]
// });

// 🔹 Using HttpClient

// import { HttpClient } from '@angular/common/http';

// constructor(private http: HttpClient) {}

// ngOnInit() {
//   this.http.get('/api/data').subscribe(data => {
//     console.log(data);
//   });
// }

// 🔥 With Interceptors (Important 🔥)

// import { provideHttpClient, withInterceptors } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(
//       withInterceptors([authInterceptor])
//     )
//   ]
// });




// Instead of writing providers in main.ts, we move them to app.config.ts

// 🔹 app.config.ts

// import { ApplicationConfig } from '@angular/core';
// import { provideHttpClient } from '@angular/common/http';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient()
//   ]
// };

// 🔹 main.ts

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { appConfig } from './app.config';

// bootstrapApplication(AppComponent, appConfig);