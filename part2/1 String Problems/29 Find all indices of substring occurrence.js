//Find all indices of substring occurrence

function findAllIndices(str, sub){
    let indices = [];

    for(let i = 0; i <= str.length - sub.length; i++){
        if(str.slice(i, i + sub.length) === sub){
            indices.push(i);
        }
    }
    return indices;
}

console.log(findAllIndices("hello world hellohelloh", "hello"));