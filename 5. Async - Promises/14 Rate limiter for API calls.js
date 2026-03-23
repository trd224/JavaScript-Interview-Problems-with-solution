// 🧠 Problem

// 👉 You want to call API 5 times
// 👉 But server allows only 2 calls per second



function apiCall(id) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("API done:", id);
        resolve();
      }, 500);
    });
}

const tasks = [
  apiCall(1),
  apiCall(2),
  apiCall(3),
  apiCall(4),
  apiCall(5),
];



const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function rateLimiterCalls(tasks, limit) {
  for (let i = 0; i < tasks.length; i += limit) {
    const batch = tasks.slice(i, i + limit);

    await Promise.all(batch.map((task) => task())); // run limited tasks
    await sleep(1000); // wait 1 second before next batch
  }
}

rateLimiterCalls(tasks, 2);




// Start:

// Run → API 1, API 2 (together)

// Wait 1 sec ⏳

// Run → API 3, API 4

// Wait 1 sec ⏳

// Run → API 5