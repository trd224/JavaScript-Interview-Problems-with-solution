//Check if string has all unique characters

let str1 = "abcdef";
let str2 = "aabcdef";

function fn(str){
    let freq = {};
    for(let ch of str){
        if(freq[ch]){
            freq[ch]++
            return false;
        }
        else{
            freq[ch] = 1;
        }
        
        
    }
    return true;
}

console.log(fn(str1));
console.log(fn(str2));

/////////////////////


let str11 = "abcdef";
let str12 = "aabcdef";

function fnn(str){
    //return new Set(str).size === str.length;

    return new Set(str).size == str.length;
}

console.log(fnn(str11));
console.log(fnn(str12));