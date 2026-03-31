// A timeout wrapper for promises means:
// 👉 If a promise takes too long, fail it (reject) after a fixed time.

// 🧠 Simple Idea
// Promise finishes fast → return result ✅  
// Promise takes too long → timeout error ❌



function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, 3000); // 3 seconds
  });
}


function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("❌ Timeout ho gaya");
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
}


withTimeout(slowTask(), 2000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));