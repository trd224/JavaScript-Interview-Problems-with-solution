// ////✅ Code (Iterative - Best)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;   // search right
        } else {
            right = mid - 1;  // search left
        }
    }

    return -1; // not found
}

// Example
console.log(binarySearch([1,3,5,7,9,11], 9)); // index 4



////////✅ Code (Recursive - Divide & Conquer)

function binarySearch(arr, left, right, target) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
        return binarySearch(arr, left, mid - 1, target); // left half
    } else {
        return binarySearch(arr, mid + 1, right, target); // right half
    }
}

// Example
console.log(binarySearch([1,3,5,7,9,11], 0, 5, 9));