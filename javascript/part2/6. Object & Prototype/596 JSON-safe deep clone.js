// ✅ JSON-safe deep clone

// 👉 This is the old and simple way to deep clone an object using JSON:

// const copy = JSON.parse(JSON.stringify(original));

const obj = {
  name: "Rizwan",
  address: { city: "Kota" }
};

const copy = JSON.parse(JSON.stringify(obj));

copy.address.city = "Jaipur";

console.log(obj.address.city); // ✅ "Kota"


/////❌ Limitations (VERY IMPORTANT)

// 👉 Problems:

// ❌ Functions removed
// ❌ undefined removed
// ❌ Date → string
// ❌ Map, Set lost
// ❌ Fails on circular references


const objct = {
  date: new Date(),
  fn: () => {},
  undef: undefined,
  map: new Map()
};

const copyObj = JSON.parse(JSON.stringify(objct));

console.log(copyObj);
// {
//   date: "2026-04-14T..."  ❗ becomes string
//   fn: undefined           ❗ removed
//   undef: undefined        ❗ removed
//   map: {}                 ❗ lost
// }


// 🔹 When to use

// ✅ Simple objects (API data, plain JSON)
// ❌ Complex objects (use structuredClone instead)



// Better alternative
// const copy = structuredClone(obj);