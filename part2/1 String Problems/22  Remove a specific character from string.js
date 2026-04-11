function removeChar(str, ch) {
    return str.replace(new RegExp(ch, "g"), "");
}

console.log(removeChar("hello world", "l"));
// "heo word"


////////////////////

function removeCharFn(str, ch){
    let newStr = "";
    for(let char of str){
        if(char !== ch){
            newStr += char;
        }
    }
    return newStr;
}

console.log(removeCharFn("hello world", "l"));

///////////////////

function removeCharFnn(str, ch) {
    return str.split(ch).join("");
}

console.log(removeCharFnn("hello world", "l"));
// "heo word"