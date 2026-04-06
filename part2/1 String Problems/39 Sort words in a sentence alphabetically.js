function sortWords(sentence) {
    return sentence
        .split(" ")           // Convert sentence to array of words
        .sort()               // Sort alphabetically
        .join(" ");           // Convert back to string
}

console.log(sortWords("banana apple mango orange"));
// Output: apple banana mango orange


////////////////////


function sortWordsFn(sentence) {
    return sentence
        .split(" ")
        .sort((a, b) => a.localeCompare(b)) // Handles case properly
        .join(" ");
}

console.log(sortWordsFn("Banana apple Mango orange"));
// Output: apple Banana Mango orange