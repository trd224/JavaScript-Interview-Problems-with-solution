
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const add = (a,b,c) => a + b + c;

const partialAdd = partial(add, 2);

console.log(partialAdd(3, 4)); // 9