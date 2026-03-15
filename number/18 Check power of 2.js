// To check if a number is a power of 2, the number must be:

// 2^0 = 1
// 2^1 = 2
// 2^2 = 4
// 2^3 = 8
// 2^4 = 16
// 2^5 = 32

// So valid numbers are:

// 1, 2, 4, 8, 16, 32, 64 ...


// Key trick:

// n & (n - 1)


function isPowerOfTwo(n){
    if(n <= 0) return false;
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false




function isPowerOfTwoFn(n){
    if(n < 1) return false;

    while(n % 2 === 0){
        n = n / 2;
    }

    return n === 1;
}

console.log(isPowerOfTwoFn(8));  // true
console.log(isPowerOfTwoFn(10)); // false