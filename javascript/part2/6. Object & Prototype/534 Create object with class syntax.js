// ✅ What is a Class?

// 👉 A cleaner way to create objects (syntactic sugar over constructor + prototype)

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello " + this.name);
    }
}

const user1 = new User("Rizwan", 25);
const user2 = new User("Ali", 30);

user1.greet(); // Hello Rizwan
user2.greet(); // Hello Ali


// 🧠 Behind the scenes

// 👉 This:

// class User { ... }

// 👉 is internally similar to:

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.greet = function() {
    console.log("Hello " + this.name);
};



// ⚡ Static method

// 👉 Belongs to class, not object

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(2, 3)); // 5


/////🔒 Private field (modern JS)

class Counter {
    #count = 0;

    increment() {
        this.#count++;
        return this.#count;
    }
}

const c = new Counter();
console.log(c.increment()); // 1


// 🧠 One-line memory

// 👉 Class = constructor + prototype (clean syntax)