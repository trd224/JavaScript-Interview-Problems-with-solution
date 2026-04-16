//Find all Armstrong numbers up to n


function isArmstrong(num){
    let str = String(num);
    let power = str.length;
    let sum = 0;

    for(let d of str){
        sum += Number(d) ** power;
    }

    return sum === num;
}

function findArmstrong(n){
    let result = [];

    for(let i = 1; i <= n; i++){
        if(isArmstrong(i)){
            result.push(i);
        }
    }

    return result;
}

// Test
console.log(findArmstrong(1000));