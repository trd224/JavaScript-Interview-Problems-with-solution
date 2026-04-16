//In JavaScript, before the spread operator (...) became common, 
// developers used Function.prototype.apply() as a workaround to 
// pass array elements as individual arguments.

// 🔹 Problem (without spread)

// Some functions expect separate arguments, not an array.

function sum(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];

// ❌ This won't work correctly
sum(arr); // NaN


/////////////////////////////////✅ Using apply() (old workaround)

function sum(a, b, c) {
  return a + b + c;
}

const arr2 = [1, 2, 3];

const result = sum.apply(null, arr2);  //fn.apply(thisArg, argsArray)

console.log(result); // 6

///////////////////////////////// 🔹 Modern way (Spread Operator)



function sum(a, b, c) {
  return a + b + c;
}

const arr3 = [1, 2, 3];

const result2 = sum(...arr3);

console.log(result2); // 6