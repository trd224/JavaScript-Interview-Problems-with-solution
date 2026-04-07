//Greatest Common Divisor
//GCD(12, 18) = 6


//formula ->     GCD(a, b) = GCD(b, a % b)


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Test
console.log(gcd(12, 18)); // 6
console.log(gcd(20, 8));  // 4
console.log(gcd(17, 13)); // 1