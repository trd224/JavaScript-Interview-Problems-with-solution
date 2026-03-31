// ✅ Behavior:

// Waits for all promises to resolve

// Returns results in same order

// If any one fails → reject immediately





//////  Build in method //////////////

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

///////////////Build in method with settimeout////////////////////


const prms1 = new Promise(res => setTimeout(() => res("A"), 5000));
const prms2 = new Promise(res => setTimeout(() => res("B"), 1000));
const prms3 = new Promise(res => setTimeout(() => res("C"), 2000));

Promise.all([prms1, prms2, prms3])
  .then(result => console.log(result)); // result will show after 5 second









  

////////// Custome promise.all ////////////////

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      
      Promise.resolve(promise) // handle non-promises
        .then((value) => {
          results[index] = value; // keep order
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err); // fail fast
        });
    });
  });
}

const proms1 = new Promise(res => setTimeout(() => res(1), 1000));
const proms2 = new Promise(res => setTimeout(() => res(2), 500));
const proms3 = 3;

promiseAll([proms1, proms2, proms3])
  .then(console.log)
  .catch(console.error);