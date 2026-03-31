function convert(s, numRows) {

    if (numRows === 1) return s;

    let rows = new Array(numRows).fill("").map(() => "");
    let currRow = 0;
    let goingDown = false;

    for (let char of s) {

        rows[currRow] += char;

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));

// P   A   H   N
// A P L S I I G
// Y   I   R