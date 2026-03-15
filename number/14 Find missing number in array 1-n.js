function findMissing(arr, n){
    let total = (n *(n + 1))/2;
    let sum = arr.reduce((acc, item) => acc + item, 0);

    return missingNumber = total - sum;
}

console.log(findMissing([1,2,4,5],5)); // 3

//////////////////////////////////////

function findMissingFn(arr, n){
    let set = new Set(arr);

    for(let i = 1; i <= n; i++){
        if(!set.has(i)){
            return i;
        }
    }
}

console.log(findMissingFn([1,2,4,5],5)); // 3