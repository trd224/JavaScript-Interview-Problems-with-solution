// 🔹 Function length property in JavaScript

// The length property of a function tells you:

// 👉 How many parameters the function expects (declared parameters)

// 🔹 Basic Example
// function add(a, b) {}

// console.log(add.length); // 2

// ✅ Because add has 2 parameters

// 🔹 Important Rules
// 1. Counts only parameters before default values
// function fn(a, b = 10, c) {}

// console.log(fn.length); // 1

// 👉 Stops counting when it hits the first default parameter (b = 10)

// 2. Rest parameters are NOT counted
// function fn(a, ...rest) {}

// console.log(fn.length); // 1
// 3. Works with arrow functions
// const multiply = (a, b, c) => {};

// console.log(multiply.length); // 3
// 4. No parameters → length is 0
// function hello() {}

// console.log(hello.length); // 0
// 🔹 Real Use Case

// You can use it to check how many arguments a function expects:

// function greet(name) {
//     return "Hello " + name;
// }

// if (greet.length === 1) {
//     console.log("Function expects one argument");
// }
// 🔹 Trick Example
// function fn(a, b, c = 5, d) {}

// console.log(fn.length); // 2

// 👉 Only a and b are counted
// 👉 c has default → counting stops

// 🔥 Summary
// function.length = number of declared parameters
// Stops at first default parameter
// Ignores rest parameters
// Does NOT count actual arguments passed
// 🔹 Bonus (very important)
// function test(a, b) {}

// console.log(test.length); // 2
// console.log(test(1));     // still works

// 👉 length ≠ number of arguments passed
// 👉 It’s about function definition, not execution