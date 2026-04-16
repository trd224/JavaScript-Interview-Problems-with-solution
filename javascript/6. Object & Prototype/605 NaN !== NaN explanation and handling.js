//This looks strange, but it’s by design.
NaN === NaN // false
NaN !== NaN // true



//////🚀 Real-world example

function safeDivide(a, b) {
  const result = a / b;

  if (Number.isNaN(result)) {
    return "Invalid calculation";
  }

  return result;
}

console.log(safeDivide(0, 0)); // Invalid