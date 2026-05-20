function prefixSumUsingMap(arr){
    let mul = 1;
    return arr.map(item => mul *= item)
}

console.log(prefixSumUsingMap([1, 2, 3, 4]));