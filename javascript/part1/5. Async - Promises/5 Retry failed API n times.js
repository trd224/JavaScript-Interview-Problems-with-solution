function createFakeAPI() {
  let count = 0; // now private, not global

  return function() {
    return new Promise((resolve, reject) => {
      count++;
      console.log("Attempt:", count);

      if (count < 3) {
        reject("Failed");
      } else {
        resolve("Success");
      }
    });
  };
}

// create instance
const fakeAPI = createFakeAPI();

// retry function
async function retry(fn, retries) {
  try {
    return await fn();
  } catch (err) {
    console.log("Error:", err);

    if (retries === 0) {
      throw err;
    }

   // console.log("Retrying...", retries);
    return retry(fn, retries - 1);
  }
}

// call
retry(fakeAPI, 5)
  .then(result => console.log("Final Result:", result))
  .catch(error => console.log("Final Error:", error));