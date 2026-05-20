//Union of two arrays//Union of two arrays

// [1,2,3,4] + [3,4,5,6] → [1,2,3,4,5,6]

let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

function union(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}



console.log(union(arr1, arr2))

/////////////////


function unionFn(arr1, arr2){
    let set = new Set();

    for(let num of arr1){
        set.add(num);
    }

    for(let num of arr2){
        set.add(num);
    }

    return [...set];
}



/////////////


function union(arr1, arr2){
    let result = [...arr1];

    for(let num of arr2){
        if(!result.includes(num)){
            result.push(num);
        }
    }

    return result;
}