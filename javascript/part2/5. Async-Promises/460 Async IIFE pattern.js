// IIFE full form:

// 👉 Immediately Invoked Function Expression


////✅ 1. Basic IIFE Example

(function(){
    console.log("Hello, I run immediately!")
})();




/////✅ 2. IIFE with parameters

(function (name) {
    console.log("Hello " + name);
})("Rizwan");




/////// ✅ 3. Async IIFE Example
(async () => {
    const data = await Promise.resolve("Async Data");
    console.log(data);
})();



///////✅ 4. Async IIFE with delay

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
}

(async () => {
    console.log("Start");

    const result = await fetchData();

    console.log(result);
})();




/////////✅ 5. Async IIFE with error handling

(async () => {
    try {
        const data = await Promise.reject("Error occurred");
        console.log(data);
    } catch (err) {
        console.log("Caught:", err);
    }
})();