//Count vowels

function countVowels(str){
    const vowelsString = "aeiou";
    let count = 0;

    for(let ch of str){
        if(vowelsString.includes(ch)){
            count++;
        }
    }
    return count;

}

console.log(countVowels("aaasiisdsd"));

