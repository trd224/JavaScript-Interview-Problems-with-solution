// formula -> 
// 5 𝑛 2 + 4 or 5 𝑛 2 − 4 is a perfect square 



///0, 1, 1, 2, 3, 5, 8, 13, 21...  <- Fibonacci numbers

function isPerfectSquare(x) {
    let s = Math.floor(Math.sqrt(x));
    return s * s === x;
}

function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Test
console.log(isFibonacci(5));  // true
console.log(isFibonacci(8));  // true
console.log(isFibonacci(10)); // false



////🔁 Alternative (Simple Loop)

function isFibonacciFn(n) {
    let a = 0, b = 1;

    while (b < n) {
        let c = a + b;
        a = b;
        b = c;
    }

    return n === a || n === b;
}

console.log(isFibonacciFn(5));  // true
console.log(isFibonacciFn(8));  // true
console.log(isFibonacciFn(10)); // false