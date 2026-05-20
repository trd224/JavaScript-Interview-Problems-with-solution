//formula ->     GCD(a, b, c, d) = GCD(GCD(GCD(a, b), c), d)


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdOfArray(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }

    return result;
}

// Test
console.log(gcdOfArray([12, 18, 24])); // 6
console.log(gcdOfArray([20, 40, 60])); // 20
console.log(gcdOfArray([7, 11, 13]));  // 1