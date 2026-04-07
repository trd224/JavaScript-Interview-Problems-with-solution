function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isAlphanumeric("abc123")); // true
console.log(isAlphanumeric("abc_123")); // false
console.log(isAlphanumeric("123")); // true
console.log(isAlphanumeric("abc")); // true
console.log(isAlphanumeric("abc 123")); // false

///////////////////////////////////////

function isAlphanumericFn(str) {
    for(let ch of str){
        if(!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))){
            return false;
        }
    }
    return true;
}

console.log(isAlphanumericFn("abc123")); // true
console.log(isAlphanumericFn("abc_123")); // false
console.log(isAlphanumericFn("123")); // true
console.log(isAlphanumericFn("abc")); // true
console.log(isAlphanumericFn("abc 123")); // false