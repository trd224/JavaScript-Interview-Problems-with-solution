///////////🔹 1. Check if object is frozen


// 👉 Frozen means:

// ❌ Cannot add properties
// ❌ Cannot delete properties
// ❌ Cannot modify values


const frozenObj = Object.freeze({a: 1});

//Check if object is sealed
console.log(Object.isFrozen(frozenObj)) //true





////////////🔹 2. Check if object is sealed

// 👉 Sealed means:

// ❌ Cannot add properties
// ❌ Cannot delete properties
// ✅ Can modify existing values

const sealedObj = Object.seal({ a: 1 });

console.log(Object.isSealed(sealedObj)); // true