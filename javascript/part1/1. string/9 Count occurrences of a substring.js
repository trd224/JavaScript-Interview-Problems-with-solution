function countOccurrences(str, sub){
    return str.split(sub).length - 1;
}

console.log(countOccurrences("hello hello hello", "hello"));