// In JavaScript, a shallow copy of an object means:

// 👉 Only the top-level properties are copied
// 👉 Nested objects/arrays are still referenced (shared)


// 🔹 Ways to create a shallow copy
/////// 1. Spread Operator {...obj}

const original = {
  name: "Rizwan",
  address: { 
    city: "Kota" 
  }
};

const copy = { ...original };

copy.name = "Ali";
copy.address.city = "Jaipur";

console.log(original.name);        // Rizwan ✅ (independent)
console.log(original.address.city); // Jaipur ❌ (changed!)

/////// 2. Object.assign()

const originalObj = {
  name: "Rizwan",
  address: { city: "Kota" }
};

const copyObj = Object.assign({}, originalObj);

copyObj.address.city = "Delhi";

console.log(originalObj.address.city); // Delhi ❌


///////3. Array.slice() (for arrays)

const arr = [1, 2, {a: 10}];
const copyArr = arr.slice(); // or arr.slice(0)

copyArr[2].a = 99;

console.log(arr[2].a); // 99 ❌