function fn(str) {
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    let stack = [];

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        } 
        else {
            let top = stack.pop();

            if (top !== pairs[str[i]]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(fn("[{()}]")); // true
console.log(fn("[]{}()")); // true
console.log(fn("[)"));     // false