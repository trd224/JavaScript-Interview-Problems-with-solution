class Stack {
  constructor() {
    this.items = [];
  }

  // Push element
  push(element) {
    this.items.push(element);
  }

  // Pop element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty ❌";
    }
    return this.items.pop();
  }

  // Peek (top element)
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty ❌";
    }
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.join(" "));
  }
}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // 10 20 30

console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2


///////////////////////////////////


// const stack = [];

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.pop()); // 3
// console.log(stack[stack.length - 1]); // peek