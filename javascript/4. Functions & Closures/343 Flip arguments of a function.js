function flip(fn){
    return function(a,b){
        return fn(b,a)
    }
}

function subtract(a, b){
    return a - b;
}

const flippedSubtract = flip(subtract)


console.log(subtract(3,2))  // 1
console.log(flippedSubtract(3,2))   //-1