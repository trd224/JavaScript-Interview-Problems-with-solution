// ✅ What is .finally()?

// 👉 Runs always, no matter:

// Promise resolved ✅
// Promise rejected ❌


//.finally() is used for cleanup work

Promise.resolve("Success")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Always runs");
    });

/////////////////

Promise.reject("Error")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Cleanup done");
    });