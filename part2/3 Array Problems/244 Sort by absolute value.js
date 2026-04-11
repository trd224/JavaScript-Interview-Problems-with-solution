//Sort by absolute value

//Sorting by absolute value means you compare numbers based on their distance from 0, ignoring the sign.

// Example

// Input:

// [3, -1, -7, 2, -5]

// Absolute values:

// 3, 1, 7, 2, 5

// Sorted by absolute value:

// [-1, 2, 3, -5, -7]



function sortByAbsolute(arr) {
    return arr.sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log(sortByAbsolute([3, -1, -7, 2, -5]));



/////////////////////



function sortByAbsoluteFn(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (Math.abs(arr[j]) > Math.abs(arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortByAbsoluteFn([3, -1, -7, 2, -5]));