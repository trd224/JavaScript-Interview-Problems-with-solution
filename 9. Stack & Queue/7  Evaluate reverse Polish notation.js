function evalRPN(tokens) {
  let stack = [];

  for (let token of tokens) {
    // If operator
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let b = stack.pop();
      let a = stack.pop();

      let result;

      if (token === "+") result = a + b;
      else if (token === "-") result = a - b;
      else if (token === "*") result = a * b;
      else result = Math.trunc(a / b); // important for division

      stack.push(result);
    } else {
      // number
      stack.push(Number(token));
    }
  }

  return stack.pop();
}

console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 6