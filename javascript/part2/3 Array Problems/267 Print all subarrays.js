
function printAllSubarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sub = "";
        for (let j = i; j < arr.length; j++) {
            sub += arr[j] + " ";
            console.log(sub.trim());
        }
    }
}

printAllSubarrays([1, 2, 3]);


//////////////// 


function getAllSubarrays(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sub = [];
        for (let j = i; j < arr.length; j++) {
            sub.push(arr[j]);
            result.push([...sub]); // copy
        }
    }

    return result;
}

console.log(getAllSubarrays([1, 2, 3]));