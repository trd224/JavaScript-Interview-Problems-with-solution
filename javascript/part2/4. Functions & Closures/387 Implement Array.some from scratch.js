Array.prototype.mySome = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true
        }
    }
    return false;
}
const arr = [10, 20, 30];

let result = arr.mySome(x => x > 25);

console.log(result); // true