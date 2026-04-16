/////////🔹 1. Using destructuring (simple way)

const obj = { a: 1, b: 2, c: 3 };

const {b, ...rest} = obj;

console.log(obj) // { a: 1, c: 3 }


//////////🔹 2. Using function (dynamic keys)
function omit(obj, keys){
    const result = {}

    for(let key in obj){
        if(!keys.includes(key)){
            result[key] = obj[key]
        }
    }

    return result;
}

const obj99 = { a: 1, b: 2, c: 3 };

console.log(omit(obj99, ['b']));
// { a: 1, c: 3 }


