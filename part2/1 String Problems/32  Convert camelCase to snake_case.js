// Convert camelCase to snake_case
let str = "helloWorld";

function fn(str){
    let newStr = "";
    for(let ch of str){
        if(ch.toLowerCase() === ch){
            newStr += ch;
        }
        else{
            newStr += "_" + ch.toLowerCase();
        }
    }
    return newStr;
}

console.log(fn(str))

////////////////////


function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
}

console.log(camelToSnake("helloWorldTest"));
// "hello_world_test"