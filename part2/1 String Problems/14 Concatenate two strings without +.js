//✅ 1. Using concat() (Most common)

let str1 = "Hello";
let str2 = "World";

let result = str1.concat(str2);
console.log(result); // HelloWorld

////////////////////////////

//✅ 2. Using Template Literals (without +)

let str11 = "Hello";
let str12 = "World";

let result2 = `${str11}${str12}`;
console.log(result2); // HelloWorld

////////////////////////////

//✅ 3. Using Array.join()
let str21 = "Hello";
let str22 = "World";

let result3 = [str21, str22].join("");
console.log(result3); // HelloWorld

///////////////////////

//✅ 4. Using String.prototype.concat.call()

let result4 = String.prototype.concat.call("Hello", "World");
console.log(result4); // HelloWorld