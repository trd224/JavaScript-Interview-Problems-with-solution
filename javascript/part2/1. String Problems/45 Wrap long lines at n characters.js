function wrapText(str, n) {
    let result = "";

    for (let i = 0; i < str.length; i += n) {
        result += str.slice(i, i + n) + "\n";
    }

    return result.trim();
}

// Example
console.log(wrapText("HelloWorldJavaScript", 5));