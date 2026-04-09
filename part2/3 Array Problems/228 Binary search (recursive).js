function binarySearch(arr, target, left = 0, right = arr.length - 1){
    if(left > right){
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target){
        return mid
    }
    else if(arr[mid] < target){
        return binarySearch(arr, target, mid + 1, right)
    }
    else{
        return binarySearch(arr, target, left, mid - 1);
    }
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 40)); // Output: 3