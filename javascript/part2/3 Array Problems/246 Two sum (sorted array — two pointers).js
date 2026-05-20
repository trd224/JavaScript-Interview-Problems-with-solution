function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            result.push(left, right);
            left++;
            right--;
        } else if (sum < target) {
            left++;   // move forward
        } else {
            right--;  // move backward
        }
    }

    return result;
}

console.log(twoSum([1, 2, 3, 4, 6], 6)); // [1, 3]