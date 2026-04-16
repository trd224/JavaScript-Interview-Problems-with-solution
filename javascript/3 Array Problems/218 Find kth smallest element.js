function findKthSmallest(arr, k){
    if (k > arr.length) return null;

    let sorted = arr.sort((a, b) => a - b); // ascending
    return sorted[k - 1];
}

console.log(findKthSmallest([3,2,1,5,6,4], 2)); // 2