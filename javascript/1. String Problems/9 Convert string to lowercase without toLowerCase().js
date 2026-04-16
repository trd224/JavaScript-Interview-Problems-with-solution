let str = "HELLO WORLD";

function convertlowercase(str){
    let result = "";

    for(let ch of str){
        let code = ch.charCodeAt(0);
        
        if(code >= 65 && code <= (65 + 25)){
            result += String.fromCharCode(code + 32);
        }
        else{
            result += ch;
        }
    }
    return result;
}

console.log(convertlowercase(str))