function padString(str, length, char = " ", direction = "right") {
    if (direction === "left") {
        return str.padStart(length, char);
    } else {
        return str.padEnd(length, char);
    }
}

console.log(padString("7", 4, "0", "left"));  // "0007"
console.log(padString("7", 4, "*", "right")); // "7***"