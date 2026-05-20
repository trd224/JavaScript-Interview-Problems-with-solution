// A binary function is a function that accepts only 2 arguments.

// 👉 “Restrict function to 2 arguments” means: even if more arguments are passed, only the first two are used.


function binary(fn){    
   
    return function(...args){
        return fn(args[0], args[1])
    }
}


function add(a, b) {
    return a + b;
}

const binaryAdd = binary(add);

console.log(binaryAdd(2, 3));        // 5
console.log(binaryAdd(2, 3, 10));    // 5 (10 ignored)