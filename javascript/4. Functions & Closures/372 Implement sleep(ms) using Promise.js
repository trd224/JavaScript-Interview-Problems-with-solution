function sleep(ms){
    return new Promise(resolve => {
        return setTimeout(resolve, ms); //dont do setTimeout(() => resolve, ms);
    })
}
async function run(){
    console.log("start");
    await sleep(2000);
    console.log("after 2 second")
}

run();