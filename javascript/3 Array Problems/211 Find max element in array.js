//Find max element in array

function findMax(arr){
    let max = -Infinity;
    for(let num of arr){
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(findMax([1,4,5,2,1,5,8,7,4,2,3,6,4,1]))