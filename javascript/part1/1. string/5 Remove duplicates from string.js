//Remove duplicates from string

function removeDuplicate(str){
    return [...new Set(str)].join('');
}

console.log(removeDuplicate('aabbcgdrr'));