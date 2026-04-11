//Reverse a string without built-in reverse()

let str = "hello";

function reverseStr(str){
    const arr = str.split("");
    let left = 0;
    let right = str.length - 1;
    
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");

}

console.log(reverseStr(str));

function reverseFn(str){
    let result = "";

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
    return result;
}

console.log(reverseFn(str))