

//gcd(a,b)=gcd(b,a mod b)   <=== formula 

function gcd(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/////////////////////////////////

// lcm(a,b)= (a*b)/gcd(a,b)    <=== formula 

function lcm(a, b){
    return (a * b) / gcd(a, b);
}

console.log(gcd(12, 18)); // 6
console.log(lcm(12, 18)); // 36