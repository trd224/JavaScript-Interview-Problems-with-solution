function contains(str, sub) {
    return str.includes(sub);
}

console.log(contains("hello world", "world")); // true
console.log(contains("hello world", "abc"));   // false


/////////////////////////


function containsFn(str, sub) {
    return str.indexOf(sub) !== -1;
}

console.log(containsFn("hello world", "world")); // true
console.log(containsFn("hello world", "abc"));   // false


///////////////////////


function containsFnn(str, sub) {
    return new RegExp(sub).test(str);
}

console.log(containsFnn("hello world", "world")); // true
console.log(containsFnn("hello world", "abc"));   // false