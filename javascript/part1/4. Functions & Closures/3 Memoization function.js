function add(a, b) {
  return a + b;
}

function memoization(fn) {
  const cache = {};   // stores previous results

  return function (...args) {
    const key = JSON.stringify(args); // unique key for inputs

    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    }

    console.log("Calculated");
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

const addMemo = memoization(add);


console.log(addMemo(2,3));
console.log(addMemo(2,4));
console.log(addMemo(2,3));
console.log(addMemo(2,3));
console.log(addMemo(2,3));
console.log(addMemo(2,3));
console.log(addMemo(2,4));
console.log(addMemo(2,5));