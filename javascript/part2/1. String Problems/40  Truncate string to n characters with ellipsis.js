function truncate(str, n) {
    if (str.length <= n) return str;
    return str.slice(0, n) + "...";
}

console.log(truncate("Hello world from ChatGPT", 10));