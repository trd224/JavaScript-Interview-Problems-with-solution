//Check if string has all unique characters

// function fn(str){
//     if(str.length !== [...new Set(str)].join('').length) return false;
//     return true;
// }

// console.log(fn("abcdef"));
// console.log(fn("aabb"));

function fn(str){
    return str.length === new Set(str).size;
}

console.log(fn("abcdef")); // true
console.log(fn("aabb"));   // false