function fn(num){
    let first = 0;
    let second = 1;

    result = [0,1];


    for(let i = 2; i < num; i++){
        let sum = first + second;
        result.push(sum);
        first = second;
        second = sum;
       
    }
    return result;
}

console.log(fn(6));

///////////////////////////////////////

function fibonacciIterative(n) {

    if (n <= 1) return [0];

    let result = [0, 1];

    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result;
}

console.log(fibonacciIterative(7));

///////////////////////////////////////////

function fibonacciRecursive(n) {

    if (n <= 1) return n;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

for (let i = 0; i < 7; i++) {
    console.log(fibonacciRecursive(i));
}