// ✅ isNaN vs Number.isNaN
// Both are used to check NaN (Not-a-Number), but they behave very differently.


////////🔹 1. isNaN() (global function)
//isNaN(value)  //It converts the value to number first, then checks.

isNaN("123");   // false  ("123" → 123)
isNaN("abc");   // true   ("abc" → NaN)
isNaN(true);    // false  (true → 1)
isNaN(undefined); // true (undefined → NaN)



////////🔹 2. Number.isNaN() (strict check)
//Number.isNaN(value) 
//👉 It does NOT convert the value 
//Checks only if value is exactly NaN

Number.isNaN("abc");      // false
Number.isNaN(undefined);  // false
Number.isNaN(NaN);        // true