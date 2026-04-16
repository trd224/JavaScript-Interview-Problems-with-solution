//Check if number is Armstrong (narcissistic)


// 🔍 Example 1: 153

// Digits = 3

// 1³ + 5³ + 3³
// = 1 + 125 + 27
// = 153 ✅

// 👉 Armstrong number

// 🔍 Example 2: 9474

// Digits = 4

// 9⁴ + 4⁴ + 7⁴ + 4⁴
// = 6561 + 256 + 2401 + 256
// = 9474 ✅




function isArmstrong(num) {
    let str = num.toString();
    let power = str.length;

    let sum = 0;

    for (let digit of str) {
        //sum +=Number(digit)**power;   or
        sum += Math.pow(Number(digit), power);
    }

    return sum === num;
}

// Test
console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false