// An async task queue with concurrency limit means:
// 👉 You have many async tasks (API calls, file processing, etc.)
// 👉 But you only allow N tasks to run at the same time (not all together)

// This helps avoid:

// Server overload 🚫

// Rate limits 🚫

// Memory issues 🚫


async function runTasks(tasks, limit) {
  let index = 0;

  async function worker(workerId) {
    while (index < tasks.length) {
      let current = index++;
      console.log(`Worker ${workerId} running Task ${current}`);

      await tasks[current](); // run task
    }
  }

  // create workers (like threads)
  const workers = [];
  for (let i = 0; i < limit; i++) {
    workers.push(worker(i));
  }

  await Promise.all(workers);
}


function createTask(id, time) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(`✅ Task ${id} done`);
        resolve();
      }, time);
    });
}

const tasks = [
  createTask(1, 1000),
  createTask(2, 2000),
  createTask(3, 1000),
  createTask(4, 1500),
  createTask(5, 500),
];