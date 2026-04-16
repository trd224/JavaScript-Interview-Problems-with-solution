
////Chunk array into groups of n

const arr = [1,2,3,4,5,6,7]
let n = 3;

function chunkArray(arr, n){
    const newArr = [];
    let chunk = [];

    for(let item of arr){
        chunk.push(item);
        if(chunk.length == n){
            newArr.push(chunk);
            chunk = [];
        }
    }

    if(chunk.length > 0){
        newArr.push(chunk);
    }
    return newArr;
}

console.log(chunkArray(arr, n));