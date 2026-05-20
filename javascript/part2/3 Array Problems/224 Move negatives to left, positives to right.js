//Move negatives to left, positives to right

function moveNegativesLeft(arr){
    let left = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }

    return arr;
}

const arr = [1, -2, 3, -4, 5, -6];
console.log(moveNegativesLeft(arr));
// [-2, -4, -6, 1, 5, 3]

///////////////////////////////////////



const arr2 = [1,2,-5,4,-2,1,-8,-9];

function fn(arr){
    let neg = [];
    let pos = [];
    for(let item of arr){
        if(item < 0){
            neg.push(item);
        }
        else{
            pos.push(item)
        }
    }
    return [...neg, ...pos];
}

console.log(fn(arr2));