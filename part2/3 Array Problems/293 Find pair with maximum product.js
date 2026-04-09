function maxProductPair(arr){
    let maxProduct = -Infinity;
    let pair = [];
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] * arr[j] > maxProduct){
                maxProduct = arr[i] * arr[j]
                pair = [arr[i], arr[j]];
            }
        }
    }
    return pair;
    
}
console.log(maxProductPair([5, 4, 3, 7, 8, 1]));
console.log(maxProductPair([-10, -20, 1, 2, 3]));

/////////////////////////



function maxProductPairFn(arr) {
    let n = arr.length;

    // sort array
    arr.sort((a, b) => a - b);

    let option1 = arr[n - 1] * arr[n - 2]; // two largest
    let option2 = arr[0] * arr[1];         // two smallest

    if (option1 > option2) {  // this conditio check product of negative number too
        return [arr[n - 2], arr[n - 1]];
    } else {
        return [arr[0], arr[1]];
    }
}

console.log(maxProductPairFn([5, 4, 3, 7, 8, 1]));
console.log(maxProductPairFn([-10, -20, 1, 2, 3]));
