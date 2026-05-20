function createIdGenerator() {
    let id = 0; // private variable

    return function () {
        id++;
        return id;
    };
}

const generateId = createIdGenerator();

console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3