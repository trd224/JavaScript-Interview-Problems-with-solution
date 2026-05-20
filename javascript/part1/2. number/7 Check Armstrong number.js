// 153= 1³ + 5³ + 3³
// 1 + 125 + 27 = 153

function isArmstrong(num){
    const arr = num.toString().split("").map(item => Number(item));
    let numLength = num.toString().length;
    
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i] ** numLength;
    }
    return result === num;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false