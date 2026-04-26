// 🔹 Difference between Presentational and Smart Components

// 👉 Presentational components focus on UI and display data, while smart components handle logic, data fetching, and state management.



// | Feature       | Presentational Component | Smart Component            |
// | ------------- | ------------------------ | -------------------------- |
// | Purpose       | UI (display data)        | Logic & data handling      |
// | Data Source   | Receives via `@Input`    | Fetches data (API/service) |
// | Communication | Uses `@Output`           | Handles events & services  |
// | Reusability   | High                     | Less                       |
// | Complexity    | Simple                   | Complex                    |



// 🔹 Example  // 👉 Only displays data
// Presentational Component

// @Component({
//   selector: 'app-user',
//   template: `<p>{{ name }}</p>`
// })
// export class UserComponent {
//   @Input() name!: string;
// }



// Smart Component  // 👉 Handles data and passes to child

// @Component({
//   selector: 'app-user-container',
//   template: `<app-user [name]="userName"></app-user>`
// })
// export class UserContainerComponent {
//   userName = "Rizwan";
// }



// 🔹 Key Difference 🔥
// Presentational → UI only
// Smart → Logic + data


