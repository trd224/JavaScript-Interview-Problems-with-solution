//Convert camelCase ↔ snake_case

function fn(str){
    let result = "";

    for(let ch of str){
        if(ch === ch.toUpperCase()){
            result += "_" + ch.toLowerCase();
        }
        else{
            result += ch;
        }
    }
    return result;

}

console.log(fn("helloWorld"))

///////////////////////////////////

function opposite(str){
    const arr = str.split("_");
    console.log(arr);
    let result = "";

    for(let i = 0; i < arr.length; i++){
        if(i !== 0){
            result += arr[i][0].toUpperCase() + arr[i].slice(1)
        }
        else{
            result += arr[i]
        }
    }
    return result;
}

console.log(opposite("hello_world"))