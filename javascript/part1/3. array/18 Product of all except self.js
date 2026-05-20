function fn(arr){
  const newArr = []
 
  for(let i = 0; i < arr.length; i++){
    let prod = 1
    for(let j = 0; j < arr.length; j++){
      if(i !== j){
       prod *= arr[j]
      }
    }
    newArr.push(prod)
  }
  return newArr;
}
console.log(fn([1,2,3,4]))


/////////////////////////

function productExceptSelf(arr){

    const n = arr.length;
    const result = new Array(n).fill(1);

    let leftProduct = 1;

    for(let i = 0; i < n; i++){
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }

    let rightProduct = 1;

    for(let i = n - 1; i >= 0; i--){
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}

console.log(productExceptSelf([1,2,3,4]));