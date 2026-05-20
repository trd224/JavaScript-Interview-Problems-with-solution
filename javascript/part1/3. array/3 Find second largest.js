const arr = [5,4,9,8,1,2];

function fn(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } 
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(fn(arr));