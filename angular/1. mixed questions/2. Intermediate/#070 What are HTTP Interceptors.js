// 🔹 What are HTTP Interceptors in Angular?

// 👉 HTTP Interceptors are services used to intercept and modify HTTP requests and responses globally in Angular.



// 🔹 Why Use Interceptors?
// Add headers (like auth token)
// Handle errors globally
// Log requests/responses
// Modify request/response



// 🔹 Example
// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const modifiedReq = req.clone({
//       headers: req.headers.set('Authorization', 'Bearer token')
//     });

//     return next.handle(modifiedReq);
//   }
// }



// 🔹 Register Interceptor

// providers: [
//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
// ]


// 🔹 Key Points
// Works globally for all HTTP calls
// Can modify request and response
// Useful for authentication & error handling