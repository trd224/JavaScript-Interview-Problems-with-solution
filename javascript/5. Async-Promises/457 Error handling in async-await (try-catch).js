// ✅ Basic idea

// 👉 try...catch in async/await = same as .then().catch()

async function getData(){
    return Promise.reject("Somthing went wrong"); //promise return
}

async function run(){
    try{
        const data = await getData();
        console.log(data);
    }
    catch(err){
        console.log("Error:", err)
    }
}

run();