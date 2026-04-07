function tribonacciSequence(num){
    let a = 0;
    let b = 1;
    let c = 1;

    for(let i = 3; i <=num; i++){
        let d = a + b + c;
        a = b;
        b = c;
        c = d
    }

    return c;
}

console.log(tribonacciSequence(10))