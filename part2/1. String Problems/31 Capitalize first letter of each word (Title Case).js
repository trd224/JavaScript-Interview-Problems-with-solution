//Capitalize first letter of each word (Title Case)


let str = "hello world";


function fn(str){
    let arr = str.split(" ");
    let result = [];


    for(let item of arr){
        let word = item.slice(0,1).toUpperCase() + item.slice(1);
        result.push(word)
    }
    return result.join(" ")
}

console.log(fn(str));

////////////////


function titleCase(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(titleCase("hello world")); // "Hello World"