//used for shallow copy

const obj = { a: 1, b: 2 };

const copy = { ...obj };

console.log(copy); // { a: 1, b: 2 }


//////🔹 Add / override properties

const obj99 = { a: 1, b: 2 };

const updated = { ...obj99, b: 10, c: 3 };

console.log(updated); // { a: 1, b: 10, c: 3 }


///////🔹 Merge objects

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 2 }