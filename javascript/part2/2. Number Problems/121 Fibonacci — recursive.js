////////Fibonacci — recursive
function fibFn(n) {
    if (n === 0) return 0;  // base case
    if (n === 1) return 1;  // base case

    return fibFn(n - 1) + fibFn(n - 2);
}

// Test
console.log(fibFn(5)); // 5
console.log(fibFn(6)); // 8


/////////////Fibonacci — iterative////////////////////

function fib(num){
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1;

    for(let i = 2; i <=num; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(5)); // 5
console.log(fib(6)); // 8