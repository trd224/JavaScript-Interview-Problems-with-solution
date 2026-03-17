function maxSlidingWindow(arr, k){
  let result = [];

  for(let i = 0; i <= arr.length - k; i++){
    let max = arr[i];
    for(let j = i; j < i + k; j++){
      if(arr[j] > max){
        max = arr[j]
      }
    }
    result.push(max)
  }
  return result;
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));