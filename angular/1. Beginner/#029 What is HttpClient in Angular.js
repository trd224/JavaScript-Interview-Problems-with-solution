// 🔹 What is HttpClient in Angular?

// HttpClient is a service in Angular used to send HTTP requests (GET, POST, PUT, DELETE) to a backend server or API.


// 🔹 Why Use HttpClient?
// Fetch data from server
// Send data to backend
// Work with REST APIs
// Handle JSON data easily



// 🔹 Setup (Important 🔥)

// First, import HttpClientModule:

// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   imports: [HttpClientModule]
// })
// export class AppModule {}




// 🔹 Example (GET Request)
// import { HttpClient } from '@angular/common/http';

// constructor(private http: HttpClient) {}

// getData() {
//   this.http.get('https://api.example.com/users')
//     .subscribe(data => {
//       console.log(data);
//     });
// }


// 🔹 Example (POST Request)
// this.http.post('https://api.example.com/users', {
//   name: 'Rizwan'
// }).subscribe(response => {
//   console.log(response);
// });



// 🔹 Important Features
// Returns Observable
// Supports interceptors
// Handles errors easily
// Works with RxJS