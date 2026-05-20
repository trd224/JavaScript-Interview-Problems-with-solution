///////🔹 1. Using Object.entries (best way 🔥)

const obj = { a: 1, b: 2, c: 3 };

const inverted = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);

console.log(inverted);
// { 1: 'a', 2: 'b', 3: 'c' }


/////////🔹 2. Using loop


function invert(obj){
    const result = {};

    for(let key in obj){
        result[obj[key]] = key;
    }
    return result;
}

console.log(invert({ a: 1, b: 2 }));
// { 1: 'a', 2: 'b' }