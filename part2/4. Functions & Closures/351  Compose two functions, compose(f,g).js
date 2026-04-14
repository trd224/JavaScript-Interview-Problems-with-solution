//In JavaScript, function composition means combining two functions so that the output of one becomes the input of the other.

// 👉 compose(f, g) means:
// f(g(x))

///✅ Basic Implementation

function compose(f, g){
    return function(x){
        return f(g(x));
    }
}


function add2(x) {
    return x + 2;
}

function multiply3(x) {
    return x * 3;
}

const resultFn = compose(add2, multiply3);

console.log(resultFn(5)); 