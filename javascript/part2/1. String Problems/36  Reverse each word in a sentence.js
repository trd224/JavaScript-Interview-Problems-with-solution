function reverseEachWord(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseEachWord("hello world")); 
// olleh dlrow