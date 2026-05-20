function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

// Example
console.log(removeDuplicates([1,1,2,2,3,4,4]));
// Output: [1,2,3,4]