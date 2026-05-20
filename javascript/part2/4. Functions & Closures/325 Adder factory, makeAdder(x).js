function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}


let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(3));   // 8
console.log(add10(3));  // 13