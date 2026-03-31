function mySetTimeout(callback, delay) {
  const start = Date.now();

  const intervalId = setInterval(() => {
    const now = Date.now();

    if (now - start >= delay) {
      clearInterval(intervalId);
      callback();
    }
  }, 1); // check every 1ms
}


mySetTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);