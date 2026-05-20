// “Return the first successful (fulfilled) promise”

// 🔥 Key idea

// ✅ Ignore errors

// ✅ Return first success

// ❌ Only fail if ALL promises fail



const p1 = Promise.reject("Error 1");
const p2 = new Promise(res => setTimeout(() => res("Success"), 1000));
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
  .then(console.log)
  .catch(console.error);