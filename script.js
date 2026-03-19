function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, delay);
  });
}

async function runSequential() {
  await task("Task 1", 1000);
  await task("Task 2", 1000);
  await task("Task 3", 1000);
}

runSequential();