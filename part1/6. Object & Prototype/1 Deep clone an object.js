// Deep clone an object

const obj = {a: 1, b: {c: 2, d:{ e:3}}}
// console.log(obj);

function deepClone(obj){
  const copyObj = {}
  for(let key in obj){
    if(typeof obj[key] === "object" && obj[key] !== null){
        copyObj[key] = deepClone(obj[key])
    }
    else{
      copyObj[key] = obj[key]
    }
  }
  return copyObj;
}

console.log(deepClone(obj));