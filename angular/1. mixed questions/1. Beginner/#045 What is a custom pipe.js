// 🔹 What is a Custom Pipe in Angular?

// 👉 A custom pipe is a user-defined pipe used to create your own data transformation logic in Angular templates.



// 🔹 Why Use Custom Pipe?
// Transform data in your own way
// Reuse logic across templates
// Keep templates clean



// 🔹 Example
// Create Pipe

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'reverse'
// })
// export class ReversePipe implements PipeTransform {
//   transform(value: string): string {
//     return value.split('').reverse().join('');
//   }
// }


// Use in Template

// <p>{{ 'hello' | reverse }}</p>