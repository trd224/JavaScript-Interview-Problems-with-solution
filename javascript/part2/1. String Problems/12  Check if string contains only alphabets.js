function isOnlyAlphabets(str) {
    for(let ch of str){
        let code = ch.charCodeAt(0);

        if(!((code >= 97 && code <= 122) || (code >= 65 && code <= 90))){
            return false;
        }
    }
    return true;
}


console.log(isOnlyAlphabets("Hello"));   // true
console.log(isOnlyAlphabets("Hello123"));// false
console.log(isOnlyAlphabets("Hello!"));  // false

////////////////////

function isOnlyAlphabetsFn(str) {

    //     ^  → start
    //     [a-zA-Z] → only alphabets
    //     +  → repeat
    //     $  → end

    return /^[a-zA-Z]+$/.test(str);
}

console.log(isOnlyAlphabetsFn("Hello"));   // true
console.log(isOnlyAlphabetsFn("Hello123"));// false
console.log(isOnlyAlphabetsFn("Hello!"));  // false

/////////////////

function isOnlyAlphabetsFnn(str){
    if(str.length === 0) return false;

    for(let ch of str){
        if(!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= "Z"))){
            return false;
        }
    }
    return true;
}

console.log(isOnlyAlphabetsFnn("Hello"));   // true
console.log(isOnlyAlphabetsFnn("Hello123"));// false
console.log(isOnlyAlphabetsFnn("Hello!"));  // false