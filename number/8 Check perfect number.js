// A Perfect Number is a number that is equal to the sum of its proper divisors (divisors excluding the number itself).

// Example: 6

// Divisors of 6 (excluding 6):

// 1, 2, 3

// Sum:

// 1 + 2 + 3 = 6


function isPerfect(num){
    let sum = 0;

    for(let i = 1; i < num; i++){     // we use also   i <= num / 2
        if(num % i === 0){
            sum += i;
        }
    }

    return sum === num;
}

console.log(isPerfect(6));   // true
console.log(isPerfect(28));  // true
console.log(isPerfect(10));  // false


// More Efficient Version (Interview Style)

// We only need to check up to num / 2.


