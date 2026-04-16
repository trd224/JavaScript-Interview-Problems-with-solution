//Find average of array

function average(arr){
    let sum = arr.reduce((acc, item) => acc + item, 0);

    return  sum/arr.length;
}

console.log(average([1,2,3,4,5,6]))