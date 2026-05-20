/////////////🔹 1. Using destructuring (simple way)

const obj = {a: 1, b: 2, c: 3};

const {a, c} = obj;

const result = {a, c};

console.log(result);  // { a: 1, c: 3 }


//////////////🔹 2. Using function (dynamic keys)

function pick(obj, keys){
    const result = {};

    for(let key of keys){
        if(key in obj){
            result[key] = obj[key]
        }
    }
    return result;
}
const objct = { a: 1, b: 2, c: 3 };

console.log(pick(objct, ['a', 'c']));
// { a: 1, c: 3 }



/////////////🔹 3. Using reduce

function pickFn(obj, keys){
    return keys.reduce((acc, key) => {
        if(key in obj) acc[key] = obj[key];
        return acc;
    },{})
}

console.log(pickFn({ a: 1, b: 2, c: 3 }, ['b', 'c']));
// { b: 2, c: 3 }