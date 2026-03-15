function flatten(arr){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result.push(...flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }

    return result;
}

const arr = [1,[2,3],[4,[5,6]],7];

console.log(flatten(arr));