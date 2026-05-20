function countChar(str, target) {
    let count = 0;

    for (let ch of str) {
        if (ch === target) {
            count++;
        }
    }

    return count;
}

console.log(countChar("hello world", "l")); // 3


///////////////////////////

function countCharFn(str, target) {

    //str.split(target)       ['he', '', 'o wor', 'd']

    return str.split(target).length - 1;
}

console.log(countCharFn("hello world", "l")); // 3


///////////////////////

function countCharFnn(str, target) {
    return [...str].filter(ch => ch === target).length;
}

console.log(countCharFnn("hello world", "l")); // 3


/////////////// Case-insensitive

function countCharFnnn(str, target) {
    let count = 0;
    for (let ch of str.toLowerCase()) {
        if (ch === target.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countCharFnnn("Hello World", "l")); // 3