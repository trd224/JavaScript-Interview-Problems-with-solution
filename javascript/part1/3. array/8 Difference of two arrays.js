function difference(arr1, arr2){
    return arr1.filter(num => !arr2.includes(num));
}

console.log(difference([1,2,3,4], [3,4,5,6]));


/////////////


function differenceFn(arr1, arr2){
    const set2 = new Set(arr2);
    return arr1.filter(num => !set2.has(num));
}

console.log(differenceFn([1,2,3,4], [3,4,5,6]));