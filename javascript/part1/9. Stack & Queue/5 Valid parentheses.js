function validParentheses(str){
  const pairs = {
    "]":"[",
    "}":"{",
    ")":"(",
  }

  let stack = [];

  for(let i = 0; i < str.length; i++){
    let ch = str[i];

    // If opening bracket
    if(ch === "[" || ch === "{" || ch === "("){
      stack.push(ch);
    }
    else{
      // If closing bracket
      let top = stack.pop();

      // If stack empty OR mismatch
      if(top !== pairs[ch]){
        return false;
      }
    }
  }

  // At end, stack must be empty
  return stack.length === 0;
}

// Test
console.log(validParentheses("[{()}]")); // true
console.log(validParentheses("[]{}()")); // true
console.log(validParentheses("[)"));     // false