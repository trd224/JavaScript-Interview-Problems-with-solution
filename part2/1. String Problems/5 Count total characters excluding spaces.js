//Count total characters excluding spaces

let str = "hello world";

function countChar(str){
    let count = 0;

    for(let ch of str){
        if(ch == " "){
            continue;
        }
        count++;
    }
    return count;
}
console.log(countChar(str))

////////////

function countCharFn(str){
    let count = 0;

    for (let ch of str) {
        if (ch !== " ") count++;
    }

    return count;
}

console.log(countCharFn(str))