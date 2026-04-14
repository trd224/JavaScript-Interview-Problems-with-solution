// 🔥 1. Example .then() chain

function step1() {
    return Promise.resolve(10);
}

function step2(val) {
    return Promise.resolve(val * 2);
}

function step3(val) {
    return Promise.resolve(val + 5);
}

step1()
    .then(res => {
        console.log(res); // 10
        return step2(res);
    })
    .then(res => {
        console.log(res); // 20
        return step3(res);
    })
    .then(res => {
        console.log(res); // 25
    });

////⚡ 2. Convert to async/await
// 👉 Rule:
// Each .then() → becomes await



//////////✅ Converted version

function step11() {
    return Promise.resolve(10);
}

function step12(val) {
    return Promise.resolve(val * 2);
}

function step13(val) {
    return Promise.resolve(val + 5);
}

async function run(){
    const res1 = await step11();
    console.log(res1);

    const res2 = await step12(res1);
    console.log(res2);

    const res3 = await step13(res2);
    console.log(res3);
}

run();