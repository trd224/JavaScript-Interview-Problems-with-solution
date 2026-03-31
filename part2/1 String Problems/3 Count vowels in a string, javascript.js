//✅ 1. Simple Loop (Best for understanding)

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World")); // 3

//✅ 2. Using Regular Expression (Short & Clean)

function countVowelsFn(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowelsFn("Hello World")); // 3

//✅ 3. Using reduce()

function countVowelsFnn(str) {
    return str.split("").reduce((count, ch) => {
        let vowelsStr = "aeiouAEIOU";
        if(vowelsStr.includes(ch)){
            count++
        }
        return count;
    }, 0)
    //console.log(str.split(""))
}

console.log(countVowelsFnn("Hello World")); // 3