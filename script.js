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