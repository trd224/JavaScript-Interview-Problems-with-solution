function createPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise rejected")
        },2000)
    })
}

createPromise().then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})


////////////////

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

myPromise
    .then(result => {
        console.log(result); // Task completed
    })
    .catch(error => {
        console.log(error);
    });