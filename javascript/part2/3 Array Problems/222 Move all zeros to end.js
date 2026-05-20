//✅ Correct Approach (Two-pointer)

const arr = [1,0,2,54,0,2,4,2,1,4];

function moveZeroToEnd(arr){
    let left = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }

    return arr;
}


console.log(moveZeroToEnd(arr));
// [1,2,54,2,4,2,1,4,0,0]


///////////////////////////
const arr2 = [1,0,2,54,0,2,4,2,1,4];

function moveZeroToEndFn(arr){
    return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)]
}

console.log(moveZeroToEndFn(arr2));