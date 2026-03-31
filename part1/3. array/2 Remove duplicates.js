const arr = [1,2,2,3,4,4,5];

/////////////1️⃣ Using Set

function removeDuplicatesUsingSet(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicatesUsingSet(arr));



////////////////////////2️⃣ Using filter


function removeDuplicatesUsingFilter(arr){
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicatesUsingFilter(arr));

///////////////////3️⃣ Using reduce


function removeDuplicatesUsingReduce(arr){
    return arr.reduce((acc, curr)=>{
        if(!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;
    }, []);
}

console.log(removeDuplicatesUsingReduce(arr));

///////////////////////4️⃣ Using for loop

function removeDuplicatesUsingFor(arr){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicatesUsingFor(arr));

///////////////////5️⃣ Using forEach


function removeDuplicatesUsingForEach(arr){
    const result = [];

    arr.forEach(num=>{
        if(!result.includes(num)){
            result.push(num);
        }
    });

    return result;
}

console.log(removeDuplicatesUsingForEach(arr));

//////////////////6️⃣ Using Map

function removeDuplicatesUsingMap(arr){
    const map = new Map();

    arr.forEach(num=>{
        map.set(num,true);
    });

    return [...map.keys()];
}

console.log(removeDuplicatesUsingMap(arr));


///////////////7️⃣ Using Object

function removeDuplicatesUsingObject(arr){
    const obj = {};

    for(let num of arr){
        obj[num] = true;
    }

    return Object.keys(obj).map(Number);
}

console.log(removeDuplicatesUsingObject(arr));

////////////////8️⃣ Using indexOf

function removeDuplicatesUsingIndexOf(arr){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicatesUsingIndexOf(arr));