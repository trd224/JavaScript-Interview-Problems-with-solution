class Queue {
  constructor() {
    this.s1 = [];  //input stack
    this.s2 = [];  //output stack
  }

  enqueue(x) {
    this.s1.push(x);
  }

  dequeue() {
    // If s2 is empty, move all from s1
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }

  peek() {
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2[this.s2.length - 1];
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2