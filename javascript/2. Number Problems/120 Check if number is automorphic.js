//Check if number is automorphic


// 🧠 Definition

// 👉 A number is automorphic if:

// Its square ends with the same digits as the number itself
// 🔍 Example 1: 5
// 5² = 25

// 👉 Ends with 5 → ✅ Automorphic

// 🔍 Example 2: 6
// 6² = 36

// 👉 Ends with 6 → ✅ Automorphic

// 🔍 Example 3: 25
// 25² = 625

// 👉 Ends with 25 → ✅ Automorphic

// 🔍 Example 4: 7
// 7² = 49

// 👉 Ends with 7? ❌ No → Not automorphic


function isAutomorphic(num) {
    let square = num * num;

    return String(square).endsWith(String(num));
}

// Test
console.log(isAutomorphic(5));   // true
console.log(isAutomorphic(6));   // true
console.log(isAutomorphic(25));  // true
console.log(isAutomorphic(7));   // false