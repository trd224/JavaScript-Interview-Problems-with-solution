function rotateArrayRightTillK(arr, k){
    k = k % arr.length;

    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

const arr = [1,2,3,4,5,6,7];
let k = 3;

console.log(rotateArrayRightTillK(arr, k)); 
// [5,6,7,1,2,3,4]


///////////////////


function rotateRight(arr, k){
    k = k % arr.length;

    // helper function
    function reverse(arr, start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(arr, 0, arr.length - 1);   // step 1
    reverse(arr, 0, k - 1);            // step 2
    reverse(arr, k, arr.length - 1);   // step 3

    return arr;
}

let arr2 = [1,2,3,4,5,6,7];
console.log(rotateRight(arr2, 3)); // [5,6,7,1,2,3,4]