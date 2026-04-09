//Intersection of two arrays

let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

function intersection(arr1, arr2){
    return arr1.filter(item => arr2.includes(item))
}

console.log(intersection(arr1, arr2))


////////////////////



function intersectionFn(arr1, arr2){
    let set = new Set(arr2);
    let result = new Set();

    for(let num of arr1){
        if(set.has(num)){
            result.add(num);
        }
    }

    return [...result];
}

console.log(intersectionFn(arr1, arr2))