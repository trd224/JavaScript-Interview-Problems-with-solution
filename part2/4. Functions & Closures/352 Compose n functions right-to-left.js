function compose(...fns){
    return function(x){
        return fns.reduceRight((value, fn) => fn(value), x)
    }
}

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;


const resultFn = compose(add1, double, square);

console.log(resultFn(2))