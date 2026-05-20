function substringOccurrences(str, sub) {
    return str.split(sub).length - 1;
}

console.log(substringOccurrences("hello world hellohello", "hello")); // 3