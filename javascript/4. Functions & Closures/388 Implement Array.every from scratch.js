Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i], i, this)){
            return false
        }
    }
    return true;
}
const arr = [10, 20, 30];

let result = arr.every(x => x > 5);

console.log(result); // true