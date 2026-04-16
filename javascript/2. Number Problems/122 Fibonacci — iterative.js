//Fibonacci series  0,1,1,2,3,5,8,13...

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

// Test
console.log(fib(5)); // 5
console.log(fib(6)); // 8


//////////////////Generate Fibonacci series

function febonacciSerise(n){
    let series = [0,1];

    for(let i = 2; i < n; i++){
        series.push(series[series.length - 1] + series[series.length - 2])
    }

    return series;
}

console.log(febonacciSerise(10))  //here 10 means 10 element should be in series