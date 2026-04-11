//Rotate array left by k

const arr = [1,2,3,4,5,6,7]
let k = 3;

function rotateArrayLeftTillK(arr, k){
    // return [...arr.slice(-k), ...arr.slice(0, k + 1)]
    return [...arr.slice(k), ...arr.slice(0, k)]
}

console.log(rotateArrayLeftTillK(arr, k))

