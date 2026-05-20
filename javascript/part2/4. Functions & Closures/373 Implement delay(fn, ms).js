function delay(fn, ms){
    return new Promise(resolve => {
        setTimeout(() => {
            const result = fn();
            resolve(result);
        }, ms)
    })
}
function sayHello(){
    console.log("hello");
    return "done";
}

delay(sayHello, 2000).then(res => {
    console.log(res);
})