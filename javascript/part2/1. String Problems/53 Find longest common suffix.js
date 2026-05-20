function longestCommonSuffix(arr){
    if(arr.length === 0) return "";

    // reverse all strings
    let reversed = arr.map(str => str.split("").reverse().join(""));

    // find prefix
    let prefix = reversed[0];

    for(let i = 1; i < reversed.length; i++){
        while(reversed[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1);
            if(prefix === "") return "";
        }
    }

    // reverse back
    return prefix.split("").reverse().join("");
}

console.log(longestCommonSuffix(["running","jogging","walking"]));