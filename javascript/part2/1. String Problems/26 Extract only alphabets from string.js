function extractAlphabets(str){
   return (str.match(/\D+/g) || []);
}

console.log(extractAlphabets("abc123xyz45 9"));



///////////////////////////



function extractAlphabetsFn(str) {
    return str.match(/[a-zA-Z]+/g) || [];
}

console.log(extractAlphabetsFn("abc123xyz45 9"));



///////////////////////////



function extractAlphabetsFnn(str) {
    let result = "";

    for(let ch of str){
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
            result += ch;
        }
    }

    return result;
}
console.log(extractAlphabetsFnn("abc123XYZ!@#"));