// arr1 = [1,2,3,4]
// arr2 = [3,4,5,6]

// Output: [1,2,3,4,5,6]

function union(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}

console.log(union([1,2,3,4], [3,4,5,6]));

/////////////


function unionFn(arr1, arr2){
   const result = [...arr1];

   for(let num of arr2){
    if(!result.includes(num)){
        result.push(num)
    }
   }

   return result;
}

console.log(unionFn([1,2,3,4], [3,4,5,6]));

/////////////

function unionFun(arr1, arr2){
    return [...new Set(arr1.concat(arr2))];
}

console.log(unionFun([1,2,3,4], [3,4,5,6]));