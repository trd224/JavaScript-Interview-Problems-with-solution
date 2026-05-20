function sumFn(n, acc = 0) {
  if (n === 0) return acc;
  return sumFn(n - 1, acc + n);
}

console.log(sumFn(10)); // 💥 stack overflow 

//////////////////////////////////////////////////////////


function sum(n, acc = 0) {
  if (n === 0) return acc;

  return () => sum(n - 1, acc + n);
}

function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}

console.log(trampoline(sum(100000))); // ✅ No stack overflow