function findMin(arr){
    let min = Infinity;
    for(let num of arr){
        if(num < min){
            min = num;
        }
    }
    return min;
}

console.log(findMin([1,4,5,2,1,5,8,7,4,2,3,6,4,1]))