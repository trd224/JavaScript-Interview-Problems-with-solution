//Find most frequent character

function mostFrequentCharacter(str){
    let arr = str.split('');
    const freq = {};

    for(let ch of arr){
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    return (Object.entries(freq).sort((a,b) => b[1] - a[1]).slice(0,1).map(item => item[0]))[0]
}

console.log(mostFrequentCharacter("shgdtttgdfrrsecvvfgskkjhs"));

function mostFrequentCharacter2(str){
    const freq = {};
    let maxChar = '';
    let maxCount = 0;

    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1;

        if(freq[ch] > maxCount){
            maxCount = freq[ch];
            maxChar = ch;
        }
    }

    return maxChar;
}

console.log(mostFrequentCharacter2("shgdtttgdfrrsecvvfgskkjhs"));