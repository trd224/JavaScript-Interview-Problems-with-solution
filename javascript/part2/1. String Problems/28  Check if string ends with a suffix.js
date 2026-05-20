//Check if string ends with a suffix

let str = "hello world";
let suffix = "world";

function fn(str, suffix){
   return new RegExp(suffix + "$").test(str);
}

console.log(fn(str, suffix))

/////////////////



function fnn(str, suffix) {
    return String(str).endsWith(suffix)
}

console.log(fnn(str, suffix))