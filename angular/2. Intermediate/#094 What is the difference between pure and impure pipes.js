// Interview Answer:

// Pure pipes in Angular are executed only when the input value changes, while impure pipes are executed on every change detection cycle regardless of input changes.


// 🔹 Pure Pipe

// Runs only when input reference changes
// Faster and efficient 🚀
// Default behavior

// 👉 Example:  

//✔ Runs only when value changes

// @Pipe({
//   name: 'purePipe',
//   pure: true
// })
// export class PurePipe implements PipeTransform {
//   transform(value: number): number {
//     return value * 2;
//   }
// }



// 🔹 Impure Pipe

// Runs on every change detection cycle
// Slower ❌
// Used for dynamic or complex data

// 👉 Example:

// ✔ Runs even if value doesn’t change

// @Pipe({
//   name: 'impurePipe',
//   pure: false
// })
// export class ImpurePipe implements PipeTransform {
//   transform(value: number): number {
//     return value * 2;
//   }
// }



// | Feature     | Pure Pipe              | Impure Pipe                    |
// | ----------- | ---------------------- | ------------------------------ |
// | Execution   | Only on input change   | Every change detection         |
// | Performance | Fast                   | Slow                           |
// | Default     | Yes                    | No                             |
// | Use case    | Simple transformations | Dynamic data (arrays, objects) |


// 🔹 Real example use case
// Pure pipe → format price, uppercase text
// Impure pipe → filtering live search list, updating arrays
