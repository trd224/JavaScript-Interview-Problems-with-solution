const obj = {
  user: {
    profile: {
      name: "Rizwan"
    }
  }
};


console.log(get(obj, "user.profile.name")) // "Rizwan"
console.log(get(obj, "user.address.city")) // undefined
console.log(get(obj, "user.address.city", "NA")) // "NA"


function get(obj, path, defaultValue) {
  const keys = path.split(".");

  let result = obj;

  for (let key of keys) {
    if (result == null) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}