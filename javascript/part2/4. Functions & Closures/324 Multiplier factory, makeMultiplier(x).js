//Multiplier factory: makeMultiplier(x)

function makeMultiplier(x){
    return function(y){
        return y * x;
    }
}

let double = makeMultiplier(2)
let triple = makeMultiplier(3);

console.log(double(5)) // 10
console.log(triple(5)) // 15