function extractNumbers(str){
   return (str.match(/\d+/g) || []).map(Number);
}
console.log(extractNumbers("abc123xyz45 9"));

///////////////////Without regex (loop)

function extractNumbersFn(str){
    let result = "";
    let numbers = [];

    for(let ch of str){
        if(ch >= '0' && ch <= '9'){
            result += ch;
        }
        else{
            if(result){
                numbers.push(result);
                result = "";
            }
        }
    }

    if(result) numbers.push(result);
    return numbers;

}
console.log(extractNumbersFn("abc123xyz45 9"));

