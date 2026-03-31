function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    // Remove smaller elements
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack empty → no greater element
    result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

    // Push current element
    stack.push(arr[i]);
  }

  return result;
}