//Find and replace using regex // replace all
function findAndReplaceUsingRegex(str, sub, newSub){
    return str.replace(new RegExp(sub, "g"), newSub)
}

console.log(findAndReplaceUsingRegex("hello world hellohelloh", "hello", "hi"))


//////////////////replace first

//Find and replace using regex // replace all
function findAndReplaceUsingRegexFn(str, sub, newSub){
    return str.replace(new RegExp(sub), newSub)
}

console.log(findAndReplaceUsingRegexFn("hello world hellohelloh", "hello", "hi"))