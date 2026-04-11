//Check two strings are anagrams

let str1 = "abcdef";
let str2 = "bacdfe";

function fn(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("")
}

console.log(fn(str1, str2))


//////✅ Using every

function fnn(a, b){
    if(a.length !== b.length) return false;

    let arr1 = a.split("").sort();
    let arr2 = b.split("").sort();

    return arr1.every((ch, i) => ch === arr2[i]);
}

console.log(fnn(str1, str2))