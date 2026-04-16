// ✅ Example

// Input:

// [2, 4, 6, 8]

// Output:

// [2, 3, 4, 5]

// 👉 Explanation:

// Step 1 → 2 / 1 = 2
// Step 2 → (2+4) / 2 = 3
// Step 3 → (2+4+6) / 3 = 4
// Step 4 → (2+4+6+8) / 4 = 5

function runningAverage(arr) {
    let result = [];
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        result.push(sum / (i + 1))
    }
    return result;
}
console.log(runningAverage([2, 4, 6, 8]));