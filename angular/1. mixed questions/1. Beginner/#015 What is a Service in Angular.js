// 🔹 What is a Service in Angular?

// A Service in Angular is a class used to handle business logic, data, or reusable functionality that can be shared across multiple components.


// 🔹 Why Use Services?
// Share data between components
// Keep components clean and simple
// Handle API calls, calculations, etc.
// Promote code reusability



////Service

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMessage() {
    return "Hello from Service";
  }
}


/////Component

// import { Component } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   template: `<h1>{{ message }}</h1>`
// })
// export class AppComponent {
//   message = '';

//   constructor(private dataService: DataService) {
//     this.message = this.dataService.getMessage();
//   }
// }



// 🔹 Key Concept: Dependency Injection (DI)

// Angular automatically provides the service to components using Dependency Injection.

// constructor(private dataService: DataService) {}