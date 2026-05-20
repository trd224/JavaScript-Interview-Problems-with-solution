//String compression
function compressString(str){
    let result = "";
    let count = 1;

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            result += str[i] + count;
            count = 1;
        }
    }

    return result;
}

console.log(compressString("aabccc"));

///////////////////////////////////////////////////

function opposite(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            for(let j = 0; j < str[i]; j++){
                newStr += str[i - 1];
            }
        }
    }
    return newStr;

}

console.log(opposite("a2b1c3"));

/////////////

function opposite2(str){
    let result = "";

    for(let i = 0; i < str.length; i+=2){ //we also use i++ 
        result += str[i].repeat(Number(str[i + 1]));
    }

    return result;
}

console.log(opposite2("a2b1c3"));


