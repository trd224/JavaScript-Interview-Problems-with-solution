function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

console.log(difference([1,2,3,4], [3,4,5]));
// Output: [1, 2]


////////////////


function diffSet(arr1, arr2) {
    let set2 = new Set(arr2);
    return arr1.filter(x => !set2.has(x));
}

console.log(diffSet([1,2,3,4], [3,4,5]));
// Output: [1, 2]