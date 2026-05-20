function step1() {
    return Promise.resolve(10);
}

step1()
    .then(result => {
        console.log(result); // 10
        return result * 2;
    })
    .then(result => {
        console.log(result); // 20
        return result + 5;
    })
    .then(result => {
        console.log(result); // 25
    });