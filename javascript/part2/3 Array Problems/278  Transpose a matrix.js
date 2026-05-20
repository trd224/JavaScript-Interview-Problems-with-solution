// 🧠 Transpose of a Matrix

// Transpose means:
// 👉 Rows become columns and columns become rows

function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = [];

    for (let i = 0; i < rows; i++) {          
        for (let j = 0; j < cols; j++) {     
            
            // create row if not exists
            if (!result[j]) {
                result[j] = [];
            }

            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

console.log(transpose([
    [1, 2, 3],
    [4, 5, 6]
]));

//output
// [
//     [1,4],
//     [2,5],
//     [ 3,6]
// ]