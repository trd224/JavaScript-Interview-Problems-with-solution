// 👉 One-Line Interview Answer:
// Functional HTTP interceptors are functions used to intercept and modify HTTP requests and responses without creating a class.



// 🔹 Example

// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const modifiedReq = req.clone({
//     setHeaders: {
//       Authorization: 'Bearer token'
//     }
//   });

//   return next(modifiedReq);
// };

// 🔹 Register Interceptor

// import { provideHttpClient, withInterceptors } from '@angular/common/http';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(
//       withInterceptors([authInterceptor])
//     )
//   ]
// });



// 🔥 What it does?

// ✔ Intercepts request
// ✔ Modify headers/body
// ✔ Handle response/errors