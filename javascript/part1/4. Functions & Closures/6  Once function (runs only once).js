function outerFn(){
  let count = 0;
  return function(){
    if(count == 0){
      count++;
      return "function called"
    }
    else{
      return "called already"
    }
  }
}

const innerFn = outerFn();


console.log(innerFn())  //function called
console.log(innerFn())  //called already
console.log(innerFn())  //called already
console.log(innerFn())  //called already

