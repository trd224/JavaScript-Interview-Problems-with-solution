function fSum(num){
    //serease = 0,1,1,2,3
    let a = 0;
    let b = 1;
    let sum = 1;

    for(let i = 2; i < num; i++){  // do not, for(let i = 2; i <= num; i++){
        let c = a + b;
        a = b;
        b = c;
        sum = sum + b
    }
    return sum;
}

console.log(fSum(5))  // here 5 is term 

//output //7   -> // 0,1,1,2,3 