// a → 97  
// A → 65  
// Difference = 32

let str = "hello world";

function convertUppercase(str){
    let result = "";

    for(let ch of str){
       let code = ch.charCodeAt(0);

       if(code >= 97 && code <= (97 + 25)){
         result += String.fromCharCode(code - 32)
       }
       else{
        result += ch;
       }
    }

    return result;
}

console.log(convertUppercase(str));