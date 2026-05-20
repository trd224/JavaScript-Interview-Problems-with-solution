Array.prototype.myFilter = function(callback){
    let result = [];

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){      // or   callback(this[i], i, this)    // value, index, array
            result.push(this[i])
        }
    }
    return result;
}
const arr = [1, 2, 3, 4];

let r = arr.myFilter(x => x > 2);

console.log(r);