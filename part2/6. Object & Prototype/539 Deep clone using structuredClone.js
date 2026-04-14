// 👉 structuredClone is a built-in global function (API)

// 👉 Unlike Object.assign or spread:

// It copies nested objects also
// No shared references

// ✅ Supports:

// Objects
// Arrays
// Dates
// Maps / Sets
// Typed arrays
// Nested structures

const obj = {
    name: "Rizwan",
    address: {city: "Kota"}
}

const copy = structuredClone(obj);

copy.address.city = "Jaipur";

console.log(obj.address.city);  // ✅ "Kota" (original not affected)







// 👉 Does NOT support:

// Functions
// DOM elements
// Some special objects (like WeakMap)


// ❌ Limitations

const obj99 = {
  fn: () => {},
};

structuredClone(obj99); // ❌ Error




