//In place” means 👉 you modify the original data structure directly, without creating a new one.

//✅ 1. Two-pointer approach (Best & Interview standard)

function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        // swap
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}

let arr = [1,2,3,4,5];
console.log(reverseArray(arr)); // [5,4,3,2,1]

/////////////////////✅ 2. Using reverse() (built-in)

let arr2 = [1,2,3,4,5];
arr2.reverse();

console.log(arr2); // [5,4,3,2,1]


/////////////////////using loop // using new array

function reverseArrayFn(arr){
   const newArr = [];
   for(i = arr.length; i > 0; i--){
        newArr.push(i)
   }
   return newArr;
}

let arr3 = [1,2,3,4,5];
console.log(reverseArrayFn(arr3)); // [5,4,3,2,1]


