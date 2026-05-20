// 👉 It means:

// Create your own version of arr.map()

// Instead of using JavaScript’s built-in: arr.map(...)

Array.prototype.myMap = function(callback){ //here x => x * 2 will be a callback
    const result = [];
    for(let i = 0; i < this.length; i++){  //here this is self array
        result.push(callback(this[i]));  // means this[i] => this[i] * 2
    }
    return result;
} 

const arr = [1,2,3];

const r = arr.myMap(x => x * 2);
console.log(r)