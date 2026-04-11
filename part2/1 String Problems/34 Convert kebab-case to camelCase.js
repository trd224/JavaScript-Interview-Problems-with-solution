
let str = "hello-world-test";

function fn(str){

    return str.split("-").map((item, index) => {
        if(index == 0){
           return item;
        }
        else{
            return item.slice(0,1).toUpperCase() + item.slice(1)
        }
    }).join("");
    
}

//////////////////////////////////////


const kebabToCamel = str =>
    str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

console.log(kebabToCamel("hello-world-test")); // helloWorldTest