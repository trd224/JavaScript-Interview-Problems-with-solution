//Remove duplicates from sorted array

function removeDuplicates(arr){
   const sortedArr = [arr[0]];

   for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] !== arr[i]){
            sortedArr.push(arr[i])
        }
   }
   return sortedArr;
}

console.log(removeDuplicates([1,1,1,2,2,3,4,4,5]));
// [1,2,3,4,5]