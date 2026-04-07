let str = "hello world";

function fn(str){
    const freq = {};

    // count frequency
    for(let ch of str){
        if(ch === " ") continue; // optional: ignore space
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let minChar = "";
    let minCount = Infinity;

    // find minimum
    for(let key in freq){
        if(freq[key] < minCount){
            minCount = freq[key];
            minChar = key;
        }
    }

    return minChar;
}

console.log(fn(str));  //"h" (also e, w, r, d appear once, but first one is returned)