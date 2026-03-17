function decimalToBinary(num){
    let binary = "";

    while(num > 0){
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

console.log(decimalToBinary(13)); // 1101


///////

console.log((13).toString(2));

//or

console.log(13..toString(2));