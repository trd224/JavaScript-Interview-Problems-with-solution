function findSecondSmallest(arr){
    let min = Infinity;
    let secondMin = Infinity;

    for(let item of arr){
        if(item < min){
            secondMin = min;
            min = item;
        }
        else if(item < secondMin && item !== min){
            secondMin = item;
        }
    }

    return secondMin === Infinity ? null : secondMin;
}

console.log(findSecondSmallest([1,2,3,4,5,6])); // 2