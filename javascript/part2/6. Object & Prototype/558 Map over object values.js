/////////🔹 1. Using Object.keys (most common)
const obj1 = { a: 1, b: 2, c: 3 };

const result1 = Object.keys(obj1).map(key => obj1[key] * 2);

console.log(result1); // [2, 4, 6]





/////////🔹 2. Using Object.values
const obj2 = { a: 1, b: 2, c: 3 };
const result2 = Object.values(obj2).map(value => value * 2);

console.log(result2); // [2, 4, 6]





////////🔹 3. Return a new object (important 🔥)
const obj3 = {a: 1, b: 2, c: 3};
function mapOverObj(obj3){
    return Object.fromEntries(Object.entries(obj3).map(([key, value]) => [key, 2 * value]));
}


console.log(mapOverObj(obj)) //{a: 2, b: 4, c: 6};


