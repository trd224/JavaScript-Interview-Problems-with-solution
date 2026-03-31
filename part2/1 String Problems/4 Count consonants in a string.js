function countConsonants(str){
    let vowelsStr = "aeiouAEIOU";
    let count = 0;

    for(let ch of str){
        // Check if it's a letter AND not a vowel
        if(/[a-zA-Z]/.test(ch) && !vowelsStr.includes(ch)){
            count++;
        }
    }

    return count;
}

console.log(countConsonants("Hello World")); // 7