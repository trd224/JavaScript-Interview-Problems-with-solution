function unary(fn){    
   
    return function(args){ //dont use ...args
        return fn(args) //dont use ...args
    }
}


const arr = ["1","2","3"];
//  arr.map((value, index) => parseInt(value, index));
console.log(arr.map(parseInt)) // map function sends 3 arguments: (value, index, array)  //result: [1, NaN, NaN]




console.log(arr.map(unary(parseInt)))  //It forces the map function  to accept only ONE argument

