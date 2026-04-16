function removeFalsy(arr){
    return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null]));


/////////////////////

function removeFalsyFn(arr){
    return arr.filter(item => !!item)
}

console.log(removeFalsyFn([0, 1, false, 2, "", 3, null]));