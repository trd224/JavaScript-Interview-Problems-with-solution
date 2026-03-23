// 🧠 What is Polling?

// 👉 “Call an API again and again after fixed time until condition is met”

// 🔹 Real Example

// 👉 Check order status every 2 seconds:

// Pending → Pending → Processing → Completed ✅



////////////////////////////////

//Step 1: Fake API

let count = 0;

function checkOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      count++;
      console.log("Checking order...", count);

      if (count === 3) {
        resolve("✅ Order Ready");
      } else {
        resolve(false);
      }
    }, 500);
  });
}

//Step 2: Polling Function

function poll(fn, interval) {
  return new Promise((resolve, reject) => {
    async function check() {
      try {
        const result = await fn();

        if (result) {
          resolve(result); // stop polling
        } else {
          setTimeout(check, interval); // try again
        }
      } catch (err) {
        reject(err);
      }
    }

    check(); // start polling
  });
}

//Step 3: Use it

poll(checkOrder, 2000).then((res) => {
  console.log(res);
});