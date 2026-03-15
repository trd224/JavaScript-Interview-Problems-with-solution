// Move zeros to end


const arr = [0,3,5,4,0,8];


function fn(arr){
    for(let i = 0; i < arr.length - 1; i++){
       for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == 0){
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
       }
    }
    return arr;
}

console.log(fn(arr));

/////////////////////////////////////

function fn2(arr){
    let left = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[i], arr[left]] = [arr[left], arr[i]]
            left++
        }
    }
    return arr;
}

console.log(fn2(arr));

///////////////////////////////////////////

 function fn3(arr){
    return [...arr.filter(item => item !== 0), ...arr.filter(item => item == 0)]
 }

 console.log(fn3(arr));