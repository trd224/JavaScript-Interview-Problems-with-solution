//Least Common Multiple
//LCM(12, 18) = 36


//formula ->     LCM(a, b) = (a × b) / GCD(a, b)

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Test
console.log(lcm(12, 18)); // 36
console.log(lcm(20, 8));  // 40
console.log(lcm(17, 13)); // 221