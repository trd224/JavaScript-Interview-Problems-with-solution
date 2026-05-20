// ✅ Problem

// 👉 Split array into two groups based on a condition

//split into odd and even

function partition(arr, callback){
    let result = [[], []];

    for(let i = 0; i < arr.length; i++){
       if(callback(arr[i])){
            result[0].push(arr[i])
       } 
       else{
        result[1].push(arr[i])
       }
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];

const result = partition(arr, x => x % 2 === 0);

console.log(result);