// ✅ What is a Factory Function?

// 👉 A function that returns an object

// 🧠 Why use factory functions?

// ✔ Create multiple objects easily
// ✔ Avoid repeating code
// ✔ No need for new keyword
// ✔ Simple and readable

//but Prototype not support

function createUser(name, age){
    return {
        name: name,
        age: age,
        greet(){
            console.log("Hello " + this.name)
        }
    }
}

const user1 = createUser("Rizwan", 25);
const user2 = createUser("Ali", 30);

user1.greet() //Hello Rizwan
user2.greet() // Hello Ali


/////////

// ⚡ Add private variables (closure)

function createCounter() {
    let count = 0; // private

    return {
        increment() {
            return ++count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2