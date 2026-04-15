function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(target === arr[mid]){
            return mid;
        }
        else if(arr[mid] < target){
            left = left + 1
        }
        else{
            right = right - 1
        }
    }
    return -1;

}
console.log(binarySearch([1,3,5,7,9,11], 9)); // index 4