// function step1() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 1 done");
//       resolve("Data from step 1");
//     }, 1000);
//   });
// }

// function step2(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 2 done with", data);
//       resolve("Data from step 2");
//     }, 1000);
//   });
// }

// function step3(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Step 3 done with", data);
//       resolve("Final data");
//     }, 1000);
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));


const arr = [2,5,4,1,2,6,8];

function fn(arr){
  return arr.sort((a,b) => a - b).splice(-2, 0, 1)
  //return secondmax;
}
console.log(fn(arr));