function getLength(str) {
    let count = 0;
    for (let ch of str) {
        count++;
    }
    return count;
}

console.log(getLength("Hello")); // 5