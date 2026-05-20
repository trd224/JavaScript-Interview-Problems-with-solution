const obj = {a: 1, b: 2, c: 3}
let k = 2; //means value should be multiplied by 2

function mapOverObj(obj, k){

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value * k]))
}

console.log(mapOverObj(obj, k))