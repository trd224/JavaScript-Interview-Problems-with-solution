function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}


function log(msg) {
    console.log("Called:", msg);
}

const throttledLog = throttle(log, 1000);

// Simulate rapid calls
throttledLog("A");
throttledLog("B");
setTimeout(() => {
  throttledLog("C");
},1200)

setTimeout(() => {
  throttledLog("D");
},1500)
setTimeout(() => {
  throttledLog("E");
},3000)