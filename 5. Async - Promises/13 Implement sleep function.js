// Super simple 👍 — sleep function means:

// 👉 “Wait for some time, then continue”

// 🧠 Basic Idea
// Wait → then run next code


function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },ms)
    })
}



async function main(){
    console.log("Start");
    await sleep(3000);

    console.log("After 3 second");
}

main();