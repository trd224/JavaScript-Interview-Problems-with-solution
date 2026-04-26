// 🔹 Difference Between constructor and ngOnInit in Angular

// Both are used in Angular components, but they serve different purposes.

// 🔹 Key Difference

// 👉 constructor → Used for dependency injection & basic initialization
// 👉 ngOnInit → Used for component initialization logic (after Angular sets data)


// | Feature        | constructor                       | ngOnInit                         |
// | -------------- | --------------------------------- | -------------------------------- |
// | Purpose        | Initialize class, inject services | Run initialization logic         |
// | Called By      | JavaScript (class creation)       | Angular lifecycle hook           |
// | Execution Time | First (when object is created)    | After constructor                |
// | Access to Data | Limited (inputs not ready)        | Full access (`@Input` available) |
// | Use Case       | Inject services                   | API calls, setup logic           |


// import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service';

// @Component({
//   selector: 'app-root',
//   template: `<h1>{{ data }}</h1>`
// })
// export class AppComponent implements OnInit {

//   data = '';

//   // constructor → for dependency injection
//   constructor(private dataService: DataService) {
//     console.log("Constructor called");
//   }

//   // ngOnInit → for initialization logic
//   ngOnInit() {
//     console.log("ngOnInit called");
//     this.data = this.dataService.getData();
//   }
// }



// 🔹 Execution Order
// constructor()
// ngOnInit()



// 🔹 Best Practice 🔥

// ✅ Use constructor for:

// Dependency Injection only

// ✅ Use ngOnInit for:

// API calls
// Initialization logic
// Data fetching
