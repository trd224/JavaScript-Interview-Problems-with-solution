////////////////////Replace All

function replaceAllSub(str, sub, newSub) {
    return str.replace(new RegExp(sub, "g"), newSub);
}

console.log(replaceAllSub("hello world hellohelloh", "hello", "hi"));


////////////////////Replace First

function replaceAllSubFn(str, sub, newSub) {
    return str.replace(sub, newSub);
}

console.log(replaceAllSubFn("hello world hellohelloh", "hello", "hi"));