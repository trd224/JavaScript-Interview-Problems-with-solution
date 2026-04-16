// ✅ What is a Constructor Function?

// 👉 A normal function used with new to create objects


// 🧠 What happens when you use new?
// 👉 JS internally does:

// Creates empty object {}
// Sets this = {}
// Adds properties (name, age)
// Returns object automatically


// 🧠 Why use constructor function?

// ✔ Create multiple objects
// ✔ Use new keyword
// ✔ Works with prototype (efficient)

//🔥 Basic Example

function User(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log("Hello " + this.name);
    }
}

const user1 = new User("Rizwan", 25);
const user2 = new User("Ali", 30);

user1.greet(); // Hello Rizwan
user2.greet(); // Hello Ali

// ⚠️ Problem (important)
// this.greet = function() { ... }

// 👉 This creates a new function for every object ❌ (memory waste)

// 🔥 Better approach (use prototype)

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function() {
    console.log("Hello " + this.name);
};