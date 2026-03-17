function findDuplicates(arr){
    const seen = new Set();
    const duplicates = new Set();

    for(let num of arr){
        if(seen.has(num)){
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates([1,2,3,2,4,5,1,6]));


// output [2,1]

//////////////////////


function findDuplicates(arr){
    const map = {};
    const duplicates = [];

    for(let num of arr){
        map[num] = (map[num] || 0) + 1;

        if(map[num] === 2){
            duplicates.push(num);
        }
    }

    return duplicates;
}

console.log(findDuplicates([1,2,3,2,4,5,1,6]));

//////////////////////


function findDuplicates(arr){
    arr.sort((a,b)=>a-b);

    const duplicates = [];

    for(let i=1;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

console.log(findDuplicates([1,2,3,2,4,5,1,6]));

/////////////////////

const arr = [1,2,3,2,4,5,1];

const duplicates = arr.filter((item,index)=>arr.indexOf(item) !== index);

console.log([...new Set(duplicates)]);