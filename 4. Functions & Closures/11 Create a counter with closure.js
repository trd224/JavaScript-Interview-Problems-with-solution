// ✅ Basic Counter with Closure

function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4


//////////////////////////


function createCounterFN() {
  let count = 0;

  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      count = 0;
      return count;
    }
  };
}

const counterAdv = createCounterFN();

console.log(counterAdv.increment()); // 1
console.log(counterAdv.increment()); // 2
console.log(counterAdv.decrement()); // 1
console.log(counterAdv.reset());     // 0