function createCounter(start = 0){
    let count = start;
    return function(){
        return count++;
    }
}
const counter = createCounter(1)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())