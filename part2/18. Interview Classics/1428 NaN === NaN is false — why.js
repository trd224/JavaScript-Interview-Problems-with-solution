// This is another classic JavaScript “weird but logical” behavior 😄

// 🔹 The result
// NaN === NaN   // false
// 🔹 Why does this happen?

// NaN means “Not-a-Number”, and it follows rules from the IEEE 754 floating-point standard.

// 👉 According to this standard:

// NaN is not equal to anything — including itself

// 🔹 Intuition (easy way to understand)

// NaN represents an invalid or undefined numeric result, like:

// 0 / 0       // NaN
// Math.sqrt(-1) // NaN

// Think like this:

// If two values are both “invalid results”, we cannot guarantee they are the same invalid value.

// So:

// NaN === NaN // false
// 🔹 Important rule

// 👉 NaN is the only value in JavaScript that is not equal to itself

// 🔹 Correct way to check NaN
// ✅ Use Number.isNaN()
// Number.isNaN(NaN) // true
// ❌ Don’t use ===
// NaN === NaN // false
// 🔹 Alternative trick
// value !== value

// 👉 Only NaN satisfies this:

// let x = NaN;

// console.log(x !== x); // true
// 🔹 Quick comparison
// 5 === 5         // true
// null === null   // true
// undefined === undefined // true
// NaN === NaN     // false ❗
// 🔥 Simple way to remember

// NaN is “broken”, so even it doesn’t trust itself 😄