///////////// 🔹 Original Callback Code

function getData(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}

// Usage
getData((err, result) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(result);
  }
});


//////🔹 Converted to Promise ✅

function getDataPromiseFn(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000)
  })
}

getDataPromiseFn().then((res) => {
  console.log(res);
}).catch(err => {
   console.log("Error:", err);
})


/////////////////🔹 Wrap getData function it into Promise ✅

function getDataFn(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}


function getDataPromise() {
  return new Promise((resolve, reject) => {
    getDataFn((err, result) => {   // 👈 using original function
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

getDataPromise()
  .then(result => console.log(result))
  .catch(err => console.log(err));