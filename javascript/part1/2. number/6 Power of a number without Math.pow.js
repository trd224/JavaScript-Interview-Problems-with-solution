
// function power(n1, n2){
//     return n1**n2;
// }
// console.log(power(2,5)); // 32




//Simple Loop Method

function powerFn(base, exp){
    let result = 1;
    for(let i = 0; i < exp; i++){
        result *= base
    }
    return result;
}

console.log(powerFn(2,5));




/////Using Recursion

function power(base, exp){
    if(exp == 0) return 1;

    return base * power(base, exp - 1)
}
console.log(power(2,5));


//////

console.log(Math.pow(2, 5)); 