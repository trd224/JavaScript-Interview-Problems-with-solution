function findKthLargest(arr, k){
    if (k > arr.length) return null;

    let sorted = arr.sort((a, b) => b - a); // descending
    return sorted[k - 1];
}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5