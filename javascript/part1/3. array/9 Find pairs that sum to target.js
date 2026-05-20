// arr = [1,2,3,4,5]
// target = 6

// output [[1,5], [2,4]]


///////////Brute Force – Two Loops
function findPairs(arr, target){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(findPairs([1,2,3,4,5], 6));


//////////Method 2 (Using Set) – Optimal

function findPairs(arr, target){
    const seen = new Set();
    const result = [];

    for(let num of arr){
        let complement = target - num;

        if(seen.has(complement)){
            result.push([complement, num]);
        }

        seen.add(num);
    }

    return result;
}

console.log(findPairs([1,2,3,4,5], 6));


////////////Method 3 (Return Only One Pair – Two Sum Interview Question)

function twoSum(arr, target){
    const map = new Map();

    for(let i = 0; i < arr.length; i++){
        let complement = target - arr[i];

        if(map.has(complement)){
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }
}

console.log(twoSum([2,7,11,15], 9));