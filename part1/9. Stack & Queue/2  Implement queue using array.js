class Queue {
  constructor() {
    this.items = [];
  }

  // Add element (enqueue)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty ❌";
    }
    return this.items.shift();
  }

  // Front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty ❌";
    }
    return this.items[0];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }

  // Print queue
  print() {
    console.log(this.items.join(" "));
  }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // 10 20 30

console.log(queue.dequeue()); // 10
console.log(queue.front());   // 20
console.log(queue.size());    // 2