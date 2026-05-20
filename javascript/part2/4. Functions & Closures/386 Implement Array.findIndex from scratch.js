Array.prototype.myFindIndex = function(callback){

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return i;
        }
    }
    return -1;
}
const arr = [10, 20, 30];

let index = arr.myFindIndex(x => x > 30);

console.log(index);