//Convert snake_case to camelCase

let str = "hello_world";

function fn(str){

    return str.split("_").map((item, index) => {
        if(index == 0){
           return item;
        }
        else{
            return item.slice(0,1).toUpperCase() + item.slice(1)
        }
    }).join("");
    
}

console.log(fn(str));

/////////////////////

const  toCnakeCase = str => str.replace(/_([a-z])/g, (_, char) => char.toUpperCase()); 

console.log(toCnakeCase(str))