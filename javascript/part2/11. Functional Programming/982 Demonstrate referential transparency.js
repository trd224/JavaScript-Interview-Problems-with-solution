// this is directly connected to pure functions
// 🧠 What is Referential Transparency?

// 👉 A function is referentially transparent if:

// You can replace the function call with its value
// without changing the program behavior


//////✅ Simple Example

function add(a, b) {
    return a + b;
}

let result = add(2, 3); //👉 Replace function call, --> let result = 5;



//////❌ Non-Referentially Transparent

let count = 0;

function increment() {
    count++;
    return count;
}

let a = increment() + increment();  //👉 Try replacing:    //let a = 1 + 2; // ❌ not predictable

//❌ Behavior changes → NOT referentially transparent



