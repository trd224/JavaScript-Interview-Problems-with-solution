//Remove all occurrences of a substring

function removeAllSub(str, sub){
    return str.replace(new RegExp(sub, "g"), "")
}
console.log(removeAllSub("hello world hellohelloh", "hello"));

///////////////////


function removeAllSubFn(str, sub){
    return str.split(sub).join("")
}
console.log(removeAllSubFn("hello world hellohelloh", "hello"));