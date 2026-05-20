//Check if string starts with a prefix

let str = "hello world";
let prefix = "hello";

function fn(str, prefix){
   return new RegExp("^" + prefix).test(str);
}

console.log(fn(str, prefix))

/////////////////



function fnn(str, prefix) {
    return str.startsWith(prefix);
}

console.log(fnn(str, prefix))