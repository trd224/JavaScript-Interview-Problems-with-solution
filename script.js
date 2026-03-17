function mySetTimeout(callback, delay){
  let start = Date.now();

  let id = setInterval(() => {
    let now = Date.now();

    if(now - start >= delay){
      callback();
      clearInterval(id)
    }
  }, 1)
}


mySetTimeout(() => {
  console.log("Hello world")
}, 2000)