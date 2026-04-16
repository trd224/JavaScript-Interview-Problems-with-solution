//Check if number is prime

function isPrimeNumber(num){

    if(num <= 1) return false; 

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }
    
    return true;
}

console.log(isPrimeNumber(4))
console.log(isPrimeNumber(7))
console.log(isPrimeNumber(10))
console.log(isPrimeNumber(11))
console.log(isPrimeNumber(15))
console.log(isPrimeNumber(17))