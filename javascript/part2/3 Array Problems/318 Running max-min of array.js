function runningMaxMin(arr) {
    let runningMax = [];
    let runningMin = [];

    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, arr[i]);
        min = Math.max(min, arr[i]);;

        runningMax.push(max);
        runningMin.push(min)
    }

    return { runningMax, runningMin };

    
}
console.log(runningMaxMin([2, 4, 6, 8]));

// output
// {
//   runningMax: [4, 4, 7, 7, 9],
//   runningMin: [4, 2, 2, 1, 1]
// }