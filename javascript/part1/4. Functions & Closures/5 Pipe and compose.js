// 🔹 1. Idea in One Line

// Both are used to chain multiple functions together

// Difference:

// pipe → left to right

// compose → right to left
//////////////////////////////

// const add = (x) => x + 2;
// const multiply = (x) => x * 3;
// const subtract = (x) => x - 1;

// let result = subtract(multiply(add(5))); // not good 

// console.log(result);

///////////left to right///////////


const add = (x) => x + 2;
const multiply = (x) => x * 3;
const subtract = (x) => x - 1;

function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

console.log(pipe(add, multiply, subtract)(5));


///////////right to left///////////


const addX = (x) => x + 2;
const multiplyX = (x) => x * 3;
const subtractX = (x) => x - 1;

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

console.log(compose(addX, multiplyX, subtractX)(5));