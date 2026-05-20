function createCounter() {
    let count = 0;   // private variable

    return function () {
        count++;     // increase count
        return count;
    };
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3