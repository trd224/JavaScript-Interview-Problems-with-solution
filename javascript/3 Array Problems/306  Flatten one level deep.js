//Flatten one level deep

let arr = [1, [2, 3], 4, [5, 6]];

function flatten(arr){
    let newArr = [];
    for(let item of arr){
        if(Array.isArray(item)){
            newArr.push(...flatten(item)); //// flatten(item) returns an array
        }
        else{
            newArr.push(item)
        }
    }
    return newArr;
}

console.log(flatten(arr));