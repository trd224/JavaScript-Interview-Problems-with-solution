// arr1 = [1,2,3,4]
// arr2 = [3,4,5,6]

// Output: [3,4]


function intersection(arr1, arr2){
    return arr1.filter(num => arr2.includes(num));
}

console.log(intersection([1,2,3,4], [3,4,5,6]));

/////////////////////////////////

function fn(arr1, arr2){
    return arr1.filter(item => {
        return arr2.some(itm => itm == item )
    })
}

console.log(fn(arr1, arr2))


///////////////////


function intersectionFn(arr1, arr2){
    const set2 = new Set(arr2);
    const result = [];

    for(let num of arr1){
        if(set2.has(num)){
            result.push(num);
        }
    }

    return result;
}

console.log(intersectionFn([1,2,3,4], [3,4,5,6]));