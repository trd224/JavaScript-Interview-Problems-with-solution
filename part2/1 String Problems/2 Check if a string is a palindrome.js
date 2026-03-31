//Check if a string is a palindrome

let str1 = "madam";
let str2 = "hello";

function isPalindrome(str){
    const arr = str.split("");

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] != arr[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

//////////////////


function isPalindromeFn(str){
   let reverseStr = str.split("").reverse().join("");

   //console.log(reverseStr);

   if(str === reverseStr){
    return true;
   }
   else{
    return false;
   }
}

console.log(isPalindromeFn(str1));
console.log(isPalindromeFn(str2));