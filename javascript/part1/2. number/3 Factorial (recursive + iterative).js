function factorialIterative(n){

    let result = 1;

    for(let i = 1; i <= n; i++){
        result *= i;
    }

    return result;
}

console.log(factorialIterative(5)); // 120


/////////////////////////////

function factorialRecursive(n){

    if(n === 0 || n === 1){
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // 120