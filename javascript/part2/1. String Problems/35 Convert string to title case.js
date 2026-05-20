function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(toTitleCase("hello world test")); // Hello World Test