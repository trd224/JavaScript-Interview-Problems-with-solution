//Capitalize first letter of each word

// function fn(str){
//     const arr = str.split(" ");
//     console.log(arr);
//     let newStr = ""
//     for(let word of arr){
//         newStr += word[0].toUpperCase() + word.slice(1) + " "
//     }
//     return newStr
// }

// console.log(fn("hello world"));

function capitalizeWords(str){
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));