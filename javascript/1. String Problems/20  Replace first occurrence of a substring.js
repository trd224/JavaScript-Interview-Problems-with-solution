let str = "hello world hello";
let result = str.replace("hello", "hi");

console.log(result); // "hi world hello"

////////////Replace All/////////


let str2 = "hello world hello";
let result2 = str2.replaceAll("hello", "hi");

console.log(result2); // "hi world hi"

///////////////////


function replaceFirstTwo(str, sub, newSub) {
    let count = 0;

    return str.replace(new RegExp(sub, "g"), (match) => {
        count++;
        if (count <= 2) {
            return newSub;
        }
        return match;
    });
}

console.log(replaceFirstTwo("hello world hellohelloh", "hello", "hi"));
// "hi world hi hello"