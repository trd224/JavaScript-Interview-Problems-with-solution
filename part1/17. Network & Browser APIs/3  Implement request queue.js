//A request queue is used to control how many async tasks (like API calls) run at the same time instead of firing all at once.
class RequestQueue {
  constructor(concurrency) {
    this.concurrency = concurrency; // max parallel requests
    this.queue = [];
    this.running = 0;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.runNext();
    });
  }

  runNext() {
    if (this.running >= this.concurrency || this.queue.length === 0) {
      return;
    }

    const { task, resolve, reject } = this.queue.shift();
    this.running++;

    task()
      .then(resolve)
      .catch(reject)
      .finally(() => {
        this.running--;
        this.runNext(); // run next task
      });
  }
}

const queue = new RequestQueue(2); // only 2 requests at a time

function apiCall(id){
    return new Promise((resolve) => {
        console.log("Start", id)
        setTimeout(() => {
            console.log("End", id)
            resolve(id);
        }, 1000)
    })
}

// Add multiple requests
queue.add(() => apiCall(1));
queue.add(() => apiCall(2));
queue.add(() => apiCall(3));
queue.add(() => apiCall(4));