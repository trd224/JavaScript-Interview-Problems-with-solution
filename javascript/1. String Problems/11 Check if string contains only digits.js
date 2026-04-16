// '0' → 48  
// '9' → 57

function isOnlyDigits(str){
    for(let ch of str){
        let code = ch.charCodeAt(0);
        if(code < 48 || code > 57){
            return false;
        }
    }
    return true;
}

console.log(isOnlyDigits("12345")); // true
console.log(isOnlyDigits("123a5")); // false


//////////////////



function isOnlyDigitsFn(str){

//     ^  → start
//     \d → only digits
//     +  → repeat
//     $  → end


    return /^\d+$/.test(str);


}

console.log(isOnlyDigitsFn("12345")); // true
console.log(isOnlyDigitsFn("123a5")); // false

/////////////////////////

function isOnlyDigitsFnn(str){
    for(let ch of str){
        if(!(ch >= '0' && ch <= '9')){
            return false;
        }
    }
    return true;
}

console.log(isOnlyDigitsFnn("12345")); // true
console.log(isOnlyDigitsFnn("123a5")); // false