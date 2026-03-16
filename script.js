// function findMedian(arr1, arr2){
//   let i = 0;
//   let j = 0;
//   const merged = [];

//   while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//       merged.push(arr1[i]);
//       i++;
//     }
//     else{
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   merged.concat(arr1.slice(i)).concat(arr2.slice(j))
//   return merged;
// }
// console.log(findMedian([1,3],[2]));


function findMedian(arr1, arr2){
  let i = 0;
  let j = 0;
  let merged = [];

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  merged = merged.concat(arr1.slice(i)).concat(arr2.slice(j));

  // let n = merged.length;

  // if(n % 2 === 1){
  //   return merged[Math.floor(n / 2)];
  // } else {
  //   return (merged[n/2 - 1] + merged[n/2]) / 2;
  // }
}

console.log(findMedian([1,3],[2]));