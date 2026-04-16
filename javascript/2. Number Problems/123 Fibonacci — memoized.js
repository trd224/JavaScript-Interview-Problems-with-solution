function fib(n, memo = {}) {
    if (n in memo) return memo[n]; // ⭐ key line

    if (n === 0) return 0;
    if (n === 1) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

console.log(fib(5)); // 5
console.log(fib(6)); // 8