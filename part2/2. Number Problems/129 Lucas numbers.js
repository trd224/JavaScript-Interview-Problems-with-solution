// The Lucas numbers are very similar to the Fibonacci sequence — same rule, but different starting values.

// 📌 Starting values
// L(0) = 2  
// L(1) = 1  


function lucas(n) {
    let result = [2, 1];

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result.slice(0, n);
}

console.log(lucas(10));