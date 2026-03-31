function trimString(str) {
    let start = 0;
    let end = str.length - 1;

    // Remove leading spaces
    while (start <= end && str[start] === " ") {
        start++;
    }

    // Remove trailing spaces
    while (end >= start && str[end] === " ") {
        end--;
    }

    // Build result manually
    let result = "";
    for (let i = start; i <= end; i++) {
        result += str[i];
    }

    return result;
}

console.log(trimString("   hello world   ")); // "hello world"