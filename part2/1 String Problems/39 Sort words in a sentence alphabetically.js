let str = "banana apple mango cherry";

function sortWords(sentence) {
    return sentence
        .split(" ")
        .sort()
        .join(" ");
}

console.log(sortWords(str));