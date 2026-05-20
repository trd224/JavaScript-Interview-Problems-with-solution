const arr = [1,0,2,54,0,2,4,2,1,4];

function moveZeroToFront(arr){
    let left = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }

    return arr;
}


console.log(moveZeroToFront(arr));