// This is one of the most famous quirks (bugs) in JavaScript 😄

// 🔹 The result
// typeof null === 'object' // true
// 🔹 Why does this happen?

// It’s actually a historical bug in JavaScript, not intentional behavior.

// When JavaScript was first created (by Brendan Eich in 1995), values were stored internally as type tags:

// Objects had a type tag of 0
// null was represented as all zero bits

// So internally:

// null → 00000000
// object → type tag 0

// 👉 Because both looked similar, JavaScript mistakenly treated null as an object.

// 🔹 Why wasn’t it fixed?

// Because fixing it would break millions of existing websites that rely on this behavior.

// So the language kept it for backward compatibility.

// 🔹 Important clarification

// Even though:

// typeof null === 'object'

// 👉 null is NOT an object

// It’s a primitive value that represents:

// "no value"
// "empty reference"
// 🔹 Correct way to check for null
// if (value === null) {
//     console.log("It's null");
// }
// 🔹 Quick comparison
// typeof null        // "object" ❌ (bug)
// typeof {}          // "object" ✅
// typeof []          // "object" ✅
// typeof undefined   // "undefined" ✅
// 🔥 Simple way to remember

// "typeof null === 'object'" is a bug that became a feature