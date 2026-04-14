// 🔹 Goal
// pipe(f1, f2, f3)(x)

// should work like:

// f3(f2(f1(x)))

// 👉 Execution: LEFT → RIGHT

function pipe(...fns){
    return function(x){
        return fns.reduce((value, fn) => fn(value), x)
    }
}

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;


const resultFn = pipe(add1, double, square);

console.log(resultFn(2)) //36