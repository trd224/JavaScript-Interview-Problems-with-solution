Array.prototype.myFind = function(callback){
    let result;

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result = this[i];
            break;
        }
    }
    return result;
}
const arr = [10, 20, 30];

let r = arr.myFind(x => x > 10);

console.log(r);