// ✅ Merge two objects (shallow)
// A shallow merge means:


// Top-level properties are merged


// Nested objects are not deeply merged (they get replaced)

//////🔹 1. Using spread operator (modern way)

const obj11 = { a: 1, b: 2 };
const obj12 = { b: 10, c: 3 };

const merged = { ...obj11, ...obj12 };

console.log(merged); // { a: 1, b: 10, c: 3 }

//////🔹 2. Using Object.assign

const mergedObj = Object.assign({}, obj11, obj12);

console.log(mergedObj); // { a: 1, b: 10, c: 3 }


////////🔥 Shallow merge behavior (important)

const obj1 = {
    user: {name: "Rizwan"}
}

const obj2 = {
    user: {age: 25}
}

const mergedO = {...obj1, ...obj2};

console.log(mergedO); //{ user: { age: 25 } }