//Find second largest element

function findSecondLargest(arr){
    let max = -Infinity;
    let secondMax = -Infinity;

    for(let item of arr){
        if(item > max){
            secondMax = max;
            max = item;
        }
        else if(item > secondMax && item !== max){
            secondMax = item
        }
    }
    return secondMax;
}

console.log(findSecondLargest([1,2,3,4,5,6]))

////////


///////////////
function findSecondLargestFn(arr){
    return arr.sort((a,b) => b - a)[1]
    //console.log(arr);
}

console.log(findSecondLargestFn([1,3,2,5,4,6]))

