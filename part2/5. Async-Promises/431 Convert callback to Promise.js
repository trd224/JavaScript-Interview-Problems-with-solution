function getData(callback){
    setTimeout(() =>{
        callback(null, "Data received")
    },2000)
}

getData((err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


///🔥 Convert to Promise

// 🧠 One-line memory

// 👉 Convert function → return new Promise → replace callback with resolve/reject

function getDataPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    })
}

getDataPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err));

