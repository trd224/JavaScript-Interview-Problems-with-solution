//Remove all whitespace from a string

let str = "  hello world  ";

function removeWhiteSpace(str){
    let newStr = "";
    const arr = str.split(" ");  //["", "hello", "world", ""]

    for(let ch of arr){
        newStr+= ch;
    }
    return newStr;


}

console.log(removeWhiteSpace(str))