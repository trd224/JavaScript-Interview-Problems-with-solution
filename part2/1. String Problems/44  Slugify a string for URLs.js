// To slugify a string for URLs, you convert it into a clean, readable format like:

// 👉 "Hello World! JS Guide" → "hello-world-js-guide"

let input = "  Héllø Wörld!!! 🚀 JavaScript & Node.js --- Guide 2026 @#%  ";
let input2 = "Hello World! JS Guide";

function slugify(str) {
    return str
        .normalize("NFD")                      // split accents
        .replace(/[\u0300-\u036f]/g, "")       // remove accents
        .replace(/[^\w\s-]/g, "")              // remove special chars (emoji, symbols)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")                  // spaces → -
        .replace(/-+/g, "-");                  // collapse multiple -
}



console.log(slugify(input));
console.log(slugify(input2));