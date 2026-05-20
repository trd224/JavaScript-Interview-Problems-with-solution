function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

// Test
console.log(fib(5)); // 5
console.log(fib(6)); // 8