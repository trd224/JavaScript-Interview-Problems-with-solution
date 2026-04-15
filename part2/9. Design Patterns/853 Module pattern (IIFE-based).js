// The Module Pattern (IIFE-based) in JavaScript is used to create private variables and functions using closures.

// It uses an IIFE (Immediately Invoked Function Expression) so that variables don’t leak into the global scope.

const Module = (function(){
    //private variable
    let privateVar = "I am private";

    //private function
    function privateMethod(){
        return privateVar;
    }

    //public API
    return {
        publicMethod: function(){
            return privateMethod();
        }
    }
})();

console.log(Module.publicMethod()); 
// Output: "I am private"

console.log(Module.privateVar); 
// ❌ undefined (not accessible)

////////you can check "4. Functions & Closures" => 321, Same problem with closures


// 🔥 How It Works
// Function runs immediately → (function(){})()
// Creates a private scope
// Returns an object → becomes the public interface
// Closure keeps access to private variables


//////////✅ Modern Alternative (ES6 Modules)

// file: counter.js
let count = 0;

export function increment() {
    count++;
}

export function getCount() {
    return count;
}