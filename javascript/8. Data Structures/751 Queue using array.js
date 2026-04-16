////////✅ Basic Queue Implementation

class Queue {
    constructor() {
        this.items = [];
    }

    // enqueue (add element)
    enqueue(element) {
        this.items.push(element);
    }

    // dequeue (remove first element)
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    // front (first element)
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size of queue
    size() {
        return this.items.length;
    }

    // Print queue
    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // [10, 20, 30]

console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10

queue.print(); // [20, 30]