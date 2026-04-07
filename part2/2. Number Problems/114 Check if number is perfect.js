//Perfect number → sum of divisors (except itself) = number

// 🔍 Example
// 6

// Divisors:

// 1, 2, 3

// Sum:

// 1 + 2 + 3 = 6 ✅

// 👉 So 6 is perfect




function isPerfect(num) {
    if (num <= 1) return false;

    let sum = 1; // 1 is always a divisor

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;

            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

// Test
console.log(isPerfect(6));   // true //1 + 2 + 3 = 6 ✅
console.log(isPerfect(28));  // true //1 + 2 + 4 + 7 + 14 = 28 ✅
console.log(isPerfect(10));  // false //1 + 2 + 5 = 8 ❌
console.log(isPerfect(496)); // true