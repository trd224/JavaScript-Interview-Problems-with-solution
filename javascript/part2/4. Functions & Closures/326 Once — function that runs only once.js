//Once — function that runs only once


function once() {
    let called = false;

    return function() {
        if(!called){
            console.log("function run successfully")
            called = true;
        }
    };
}

let callFn = once();

callFn();
callFn();
callFn();
callFn();