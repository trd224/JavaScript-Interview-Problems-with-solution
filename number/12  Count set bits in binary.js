function countSetBits(num){
    let count = 0;

    while(num > 0){
        count += num & 1;   // check last bit
        num = num >> 1;     // right shift
    }

    return count;
}

console.log(countSetBits(13)); // 3





//Using String (Easy but slower)

function countSetBitsFn(num){
    return num.toString(2).split('1').length - 1;
}

console.log(countSetBitsFn(13)); // 3