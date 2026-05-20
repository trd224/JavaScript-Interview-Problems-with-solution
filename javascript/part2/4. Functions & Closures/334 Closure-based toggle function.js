function createToggle() {
    let state = false; // private variable

    return function () {
        state = !state; // toggle
        return state;
    };
}

const toggle = createToggle();

console.log(toggle()); // true
console.log(toggle()); // false
console.log(toggle()); // true