// 🔹 What is a Pipe in Angular?

// A Pipe in Angular is used to transform data in the template before displaying it.

// 🔹 Example
// <p>{{ name | uppercase }}</p>




// 🔹 Common Built-in Pipes

// | Pipe      | Example                           |   Output    |
// | --------- | --------------------------------- | ----------- |
// | uppercase | `{{ name  | uppercase }}`         | RIZWAN      |
// | lowercase | `{{ name  | lowercase }}`         | rizwan      |
// | date      | `{{ today | date:'dd/MM/yyyy' }}` | 16/04/2026  |
// | currency  | `{{ price | currency }}`          | ₹100.00     |
// | json      | `{{ obj   | json }}`              | JSON format |




// 🔹 Chaining Pipes

// {{ name | uppercase | slice:0:3 }}



// 🔹 Custom Pipe Example

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'reverse'
// })
// export class ReversePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.split('').reverse().join('');
//   }
// }

//<p>{{ 'hello' | reverse }}</p>



// 🔹 Key Points
// Used only in templates
// Improves readability
// Can create custom pipes
// Pure by default (runs only when input changes)




// 🔹 1. Pure vs Impure Pipes

// ✅ Pure Pipe (Default)
// Runs only when input value changes
// Faster and better for performance

// Example //👉 Runs only when value changes

// @Pipe({
//   name: 'double'
// })
// export class DoublePipe {
//   transform(value: number) {
//     return value * 2;
//   }
// }


// ❌ Impure Pipe
// Runs on every change detection cycle
// Can affect performance if overused

// Example //👉 Runs again even if data reference doesn’t change

// @Pipe({
//   name: 'filterItems',
//   pure: false
// })
// export class FilterPipe {
//   transform(items: any[]) {
//     return items.filter(item => item.active);
//   }
// }




// | Feature     | Pure Pipe       | Impure Pipe        |
// | ----------- | --------------- | ------------------ |
// | Execution   | On input change | Every change cycle |
// | Performance | Fast            | Slower             |
// | Default     | Yes             | No                 |



// 🔹 Interview Line

// 👉 Pure pipes run only when input changes, while impure pipes run on every change detection cycle.

