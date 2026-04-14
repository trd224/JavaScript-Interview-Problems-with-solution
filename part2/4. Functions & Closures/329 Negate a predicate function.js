//A negate function takes a predicate (a function that returns true/false) and 
// returns a new function with the opposite result.

function negate(fn){
    return function(...arg){
        return !fn(...arg)
    }
}

function isEven(n){
    return n % 2 === 0;
}

const isOdd = negate(isEven)

console.log(isEven(4)) //true;
console.log(isOdd(4)) //false



/////////

function negateFn(fn){
    return function(...arg){
        return !fn(...arg)
    }
}

const numbers = [1,2,3,4,5,6]

const isEvenValue = n => n % 2 === 0;

const isOddValue = negateFn(isEvenValue);

const oddNumbers = numbers.filter(isOddValue);

console.log(oddNumbers)