// ✅ Problem

// 👉 Convert:

// [ [1,'a'], [2,'b'], [3,'c'] ]

// 👉 Into:

// [ [1,2,3], ['a','b','c'] ]



const arr = [ [1,'a'], [2,'b'], [3,'c'] ];

function unzip(arr){
   return [arr.map(item => item[0]), arr.map(item => item[1])]
}

console.log(unzip(arr));

////////////

function unzipFn(arr){
    let arr1 = [];
    let arr2 = [];

    for(let [a, b] of arr){
        arr1.push(a);
        arr2.push(b);
    }

    return [arr1, arr2];
}

console.log(unzipFn([[1,'a'], [2,'b'], [3,'c']]));