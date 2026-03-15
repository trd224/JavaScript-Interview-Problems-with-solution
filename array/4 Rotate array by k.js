const arr = [1,2,3,4,5];
let k = 2;

// function fn(arr, k){
//     return [...arr.slice(-k), ...arr.slice(0, k+1)]
// }

// console.log(fn(arr, k));

function fn(arr, k){

    function reverse(arr, start, end){
        while(start < end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    k = k % arr.length;

    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
}

console.log(fn(arr, k));