function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // found
        } 
        else if (arr[mid] < target) {
            left = mid + 1; // search right half
        } 
        else {
            right = mid - 1; // search left half
        }
    }

    return -1; // not found
}

// Test
let arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 40)); // Output: 3