class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);

    // Push to minStack if it's empty OR x <= current min
    if (this.minStack.length === 0 || x <= this.getMin()) {
      this.minStack.push(x);
    }
  }

  pop() {
    let val = this.stack.pop();

    if (val === this.getMin()) {
      this.minStack.pop();
    }

    return val;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const s = new MinStack();

s.push(5);
s.push(2);
s.push(8);
s.push(1);

console.log(s.getMin()); // 1

s.pop(); // remove 1
console.log(s.getMin()); // 2