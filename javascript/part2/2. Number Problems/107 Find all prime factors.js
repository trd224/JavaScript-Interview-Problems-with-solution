function getPrimeFactors(num) {
    let factors = [];

    // Handle 2 separately
    //  1. 2 is the only even prime number
    // All other even numbers → divisible by 2 → not prime
    // So after removing 2, only odd primes remain (3, 5, 7, …)

    while (num % 2 === 0) {
        factors.push(2);
        num = num / 2;
    }

    // Check odd numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {  //Math.sqrt -> because factors always come in pairs, so loop run till sqrt of number
        while (num % i === 0) {
            factors.push(i);
            num = num / i;
        }
    }

    // If remaining number is > 2 // for eg. 2.25 etc
    if (num > 2) {
        factors.push(num);
    }

    return factors;
}

// Test
console.log(getPrimeFactors(60)); // [2, 2, 3, 5]
console.log(getPrimeFactors(84)); // [2, 2, 3, 7]
console.log(getPrimeFactors(17)); // [17]