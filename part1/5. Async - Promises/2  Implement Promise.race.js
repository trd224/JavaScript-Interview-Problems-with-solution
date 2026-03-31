/////////////“Return the result of the first promise that settles (resolve OR reject)”///////////

const p1 = new Promise(res => setTimeout(() => res("A"), 3000));
const p2 = new Promise(res => setTimeout(() => res("B"), 1000));
const p3 = new Promise(res => setTimeout(() => res("C"), 2000));

Promise.race([p1, p2, p3])
  .then(console.log) // B
  .catch(console.error);



  /////////////////////////////////////


function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p)
        .then(resolve)   // first success wins
        .catch(reject);  // first error wins
    });
  });
}



const proms1 = new Promise(res => setTimeout(() => res(1), 1000));
const proms2 = new Promise(res => setTimeout(() => res(2), 500));
const proms3 = 3;

myRace([proms1, proms2, proms3])
  .then(console.log)
  .catch(console.error);