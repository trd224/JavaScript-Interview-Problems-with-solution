// In JavaScript, the complement of a Boolean function means reversing its result (true → false, false → true).

function negate(fn){
    return function(...args){
        return !fn(...args)
    }
}


function isPositive(num){
    return num > 0
}


const isNotPositive = negate(isPositive);

console.log(isPositive(5)) /// true
console.log(isNotPositive(5)) //false

/////////////////////////////////////////////

function negate(fn){
    return function(...args){
        return !fn(...args)
    }
}


function isBetween(a, b, c){
    return a > b && a < c;
}


const isNotBetween = negate(isBetween);

console.log(isBetween(5,1,10)) /// true
console.log(isNotBetween(5,1,10)) //false


