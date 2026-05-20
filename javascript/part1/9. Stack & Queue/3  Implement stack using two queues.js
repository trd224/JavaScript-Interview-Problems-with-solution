// 📌 Push Operation (Important trick)
// Push new element into q2
// Move all elements from q1 → q2
// Swap q1 and q2

// 👉 Now newest element is always at front of q1


class Stack {
  constructor() {
    this.q1 = []; //main queue
    this.q2 = []; //helper queue
  }

  push(x) {
    // Step 1: push to q2
    this.q2.push(x);

    // Step 2: move all from q1 → q2
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // Step 3: swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    if (this.q1.length === 0) return null;
    return this.q1.shift();
  }

  top() {
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }
}

// Test
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log(s.pop()); // 3
console.log(s.pop()); // 2