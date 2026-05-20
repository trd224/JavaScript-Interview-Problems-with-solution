//Find sum of array

function sumArr(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

console.log(sumArr([1,2,3,4,5]))



/////////////

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15