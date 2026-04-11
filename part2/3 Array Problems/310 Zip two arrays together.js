//Zip two arrays together     ///Combine two arrays index by index

// Example:
// arr1 = [1, 2, 3]
// arr2 = ['a', 'b', 'c']

// 👉 Output:

// [ [1,'a'], [2,'b'], [3,'c'] ]



function zipFn(arr1, arr2){

    let newArr = [];
    
    for(let i = 0; i < Math.min(arr1.length, arr2.length); i++){
        newArr.push([arr1[i], arr2[i]])
    }
    return newArr;
}

console.log(zipFn([1,2,3], ['a','b','c']));



//////////////////////////////////////////////

function zip(arr1, arr2){
    let newArr = [];

    for(let item of arr1){
        for(let itm of arr2){
            if(arr1.indexOf(item) === arr2.indexOf(itm)){
                newArr.push([item, itm])
            }
        }
    }

    return newArr;
    
}
console.log(zip([1,2,3], ['a','b','c']));