function promiseErrorHandling(){
    return Promise.reject("Error occurred")
}

promiseErrorHandling().catch(err => {
    console.log(err);
})

//////////////////

Promise.resolve(10)
    .then(res => {
        throw new Error("Oops!");
    })
    .catch(err => {
        console.log(err.message); // Oops!
    });