// 🧠 What is a Pure Function?

// 👉 A function is pure if:

// ✅ Same input → always same output
// ❌ No side effects (doesn’t change outside data) //very important


////////////////////////❌ Impure Function (Bad)

// 👉 Problem:

// Depends on external variable total
// Changes outside state → side effect

let total = 0;

function add(num) {
    total += num; // ❌ modifying external variable
    return total;
}



///////////////////////////✅ Pure Function (Good)

// 👉 Why pure?

// No external variable
// Same input → same output

function add(a, b) {
    return a + b;
}




/////////////////////////////////////////////////////////////////////////////

////////////////✅ Another Example
/////////❌ Impure

let arr = [1,2,3];

function addItem(item){
    arr.push(item)  // ❌ modifies original array
}



/////////✅ Pure

function addItem(arr, item) {
    return [...arr, item]; // ✅ returns new array
}