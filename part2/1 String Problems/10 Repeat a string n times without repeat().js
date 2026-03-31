
//✅ 1. Using Loop (Best & Simple)
function repeatString(str, n){
    let result = "";

    for(let i = 0; i < n; i++){
        result += str;
    }

    console.log(result);
}
console.log(repeatString("abc", 3)); // abcabcabc

//✅ 2. Using Array + join() Trick

function repeatStringFn(str, n) {
    return new Array(n + 1).join(str);
}

console.log(repeatStringFn("abc", 3)); // abcabcabc



//✅ 3. Using Recursion

function repeatStringFnn(str, n){
    if(n <= 0) return "";
    return str + repeatStringFnn(str, n - 1)
}

console.log(repeatStringFnn("abc", 3))