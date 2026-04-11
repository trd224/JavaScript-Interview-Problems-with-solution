//Find most frequent character

let str = "hello world";

function fn(str){
    const freq = {};

    for(let ch of str){
       freq[ch] = (freq[ch] || 0) + 1;
    }
   let maxChar = "";
   let maxCount = 0;

   for(let key in freq){
    if(freq[key] > maxCount){
        maxCount = freq[key];
        maxChar = key;
    }
   }
   return maxChar;
}

console.log(fn(str));