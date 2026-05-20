// 🔹 Example (real forEach)
// const arr = [1, 2, 3];

// arr.forEach(x => console.log(x));

// Output:

// 1
// 2
// 3

Array.prototype.myForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])    ///   or callback(this[i], i, this)
    }
}
const arr = [10, 20, 30];

arr.myForEach(x => console.log(x));