function addMatrices(A, B){
    let rows = A.length;
    let cols = A[0].length;

    let result = [];

    for(let i = 0; i < rows; i++){
        result[i] = [];
        for(let j = 0; j < cols; j++){
            result[i][j] = A[i][j] + B[i][j];
        }
    }

    return result;
}

// Test
let A = [
    [1, 2, 3],
    [4, 5, 6]
];

let B = [
    [7, 8, 9],
    [1, 2, 3]
];

console.log(addMatrices(A, B));


//output
// [
//   [8, 10, 12],
//   [5, 7, 9]
// ]