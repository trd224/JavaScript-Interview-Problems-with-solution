function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // return index
        }
    }
    return -1; // not found
}

// Test
let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30)); // Output: 2