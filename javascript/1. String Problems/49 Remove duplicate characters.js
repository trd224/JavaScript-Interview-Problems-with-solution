let str = "aabcdddeef";

////✅ 1. Using Set (best & shortest)

function fn(str){
    return [...new Set(str)].join("");
}

console.log(fn(str));



///////✅ 2. Using for...of + includes
function fnn(str){
    let result = "";

    for(let ch of str){
        if(!result.includes(ch)){
            result += ch;
        }
    }

    return result;
}

console.log(fnn(str));


///////✅ 3. Using filter


function fnnn(str){
    return str
        .split("")
        .filter((ch, index) => str.indexOf(ch) === index)
        .join("");
}

console.log(fnnn(str));