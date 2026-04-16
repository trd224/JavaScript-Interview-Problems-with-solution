// 🔹 What is Dependency Injection (DI) in Angular?

// Dependency Injection is a design pattern where one class gets its required dependencies (services) from an external source instead of creating them itself.



//🔹 Without Dependency Injection ❌
// export class AppComponent {
//   dataService = new DataService(); // manually creating
// }

// 👉 Problem:

// Tight coupling
// Hard to test
// Not reusable




// 🔹 With Dependency Injection ✅ //
// constructor(private dataService: DataService) {}
//👉 Angular automatically injects the service




// 🔹 How It Works
// You create a service
// Mark it with @Injectable()
// Register it (usually providedIn: 'root')
// Angular injects it into components

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   getData() {
//     return "Hello DI";
//   }
// }


// export class AppComponent {
//   constructor(private dataService: DataService) {
//     console.log(this.dataService.getData());
//   }
// }

// 🔹 Benefits of DI
// Loose coupling
// Easy testing
// Reusable code
// Better maintainability

