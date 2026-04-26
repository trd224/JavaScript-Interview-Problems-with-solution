// 🔹 How do you handle HTTP errors in Angular?

// 👉 HTTP errors in Angular are handled using catchError in RxJS or by using HTTP Interceptors for global error handling.


// 🔹 1. Using catchError (Local Handling)   //👉 Handles error for a specific API call

// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// this.http.get('/api/data')
//   .pipe(
//     catchError(error => {
//       console.error(error);
//       return throwError(() => error);
//     })
//   )
//   .subscribe();



//   🔹 2. Using HTTP Interceptor (Global Handling)

// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(req).pipe(
//       catchError(error => {
//         console.error("Global Error:", error);
//         return throwError(() => error);
//       })
//     );
//   }
// }


// 🔹 Key Points
// catchError() → Local error handling
// Interceptor → Global error handling
// Helps manage API failures



// 👉 When throwError is used, the error goes to the error callback of the subscribe() method.

// 🔹 Flow Understanding 🔥
// HTTP Call → catchError → throwError → subscribe(error)


// )
// 🔹 Example

// this.http.get('/api/data')
//   .pipe(
//     catchError(err => {
//       console.log("Inside catchError");
//       return throwError(() => err); // rethrow
//     })
//   )
//   .subscribe({
//     next: data => console.log(data),
//     error: err => console.log("Error received:", err)
//   });


//   🔹 Output Flow
// Error occurs in API ❌
// Goes to catchError()
// throwError() sends it forward
// Finally reaches 👉 subscribe.error

// 🔹 Key Point 🔥

// 👉 throwError does NOT handle error, it just passes it forward


// 🔹 Without throwError ❌
// catchError(err => {
//   return of([]); // handle here
// })

// 👉 Error is handled here, NOT sent to subscribe

// 🔹 With throwError ✅
// catchError(err => {
//   return throwError(() => err);
// })

// 👉 Error goes to subscribe.error