// Async waterfall means:
// 👉 Run tasks one after another (sequentially)
// 👉 Output of one task → becomes input of next task

// 🧠 Simple Idea
// Task1 → Task2 → Task3 → Task4

// Each task depends on the previous one ✅


function task1(input){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task1:", input);
            resolve(input + 1)
        },1000)
    })
}

function task2(input){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task2:", input);
            resolve(input * 2)
        },1000)
    })
}

function task3(input){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task3:", input);
            resolve(input - 3)
        },1000)
    })
}

const tasks = [task1, task2, task3];


async function asyncWaterFall(tasks, initialValue){
    let result = initialValue;

    for(const task of tasks){
       result =  await task(result)
    }
    return result;
}


asyncWaterFall(tasks, 5).then((result) => {
    console.log("Final Result", result)
})