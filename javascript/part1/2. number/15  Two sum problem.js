//Given an array of numbers and a target, return the indices of two numbers whose sum equals the target.

const nums = [2,7,11,15]
let target = 9

function fn(arr, k){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] + arr[right] == k){
            return [left, right]
        }
        else if(arr[left] + arr[right] > k){
            right--
        }
        else{
            left++
        }
    }

    return [];
}
console.log(fn(nums, target))

////////////////////////////////////////////////////

function twoSum(nums, target){

    let map = {};

    for(let i = 0; i < nums.length; i++){

        let complement = target - nums[i];

        if(map[complement] !== undefined){
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

}

console.log(twoSum([2,7,11,15], 9));

////////////////////////////


function twoSumFn(nums, target){

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){

            if(nums[i] + nums[j] === target){
                return [i, j];
            }

        }
    }

}

console.log(twoSumFn([2,7,11,15], 9));