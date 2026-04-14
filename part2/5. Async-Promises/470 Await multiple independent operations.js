// ❌ Wrong way (sequential)

// 👉 Problem:

// Runs one after another
// Slow ⏳

async function runFn(){
    const a = await task1();
    const b = await task2();
    const c = await task3();

    console.log(a, b, c);
}


//////✅ Correct way (parallel) — use Promise.all

// 🧠 Why this is better?

// 👉 All tasks start at same time
// 👉 Total time = max(task time) (not sum)

async function runFn(){
    const [a, b, c] = await Promise.all([
        task1(),
        task2(),
        task3()
    ])
    console.log(a, b, c);
}


///////////

function task1() {
    return new Promise(res => setTimeout(() => res(1), 1000));
}

function task2() {
    return new Promise(res => setTimeout(() => res(2), 2000));
}

function task3() {
    return new Promise(res => setTimeout(() => res(3), 3000));
}

async function run() {
    const [a, b, c] = await Promise.all([
        task1(),
        task2(),
        task3()
    ]);

    console.log(a, b, c);
}

run();