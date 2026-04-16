function fn(arr, target){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result;
}

console.log(fn([5,4,3,7,8,1], 9))


// output: [[5,4], [8,1]]



//////////////////

function findPairs(arr, target) {
    let set = new Set();
    let result = [];

    for (let num of arr) {
        let diff = target - num;

        if (set.has(diff)) {
            result.push([diff, num]);
        }

        set.add(num);
    }

    return result;
}

console.log(findPairs([5,4,3,7,8,1], 9));

