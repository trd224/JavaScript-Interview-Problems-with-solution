function countAllSubarray(arr){

    //let result = [];
    let subArrayCount = 0;

    for(let i = 0; i < arr.length; i++){
        let subArray = [];
        for(let j = i; j < arr.length; j++){
            subArray.push(arr[j])
            subArrayCount++;
           // result.push([...subArray]);
        }
    }
    return subArrayCount;
}

console.log(countAllSubarray([1, 2, 3]))