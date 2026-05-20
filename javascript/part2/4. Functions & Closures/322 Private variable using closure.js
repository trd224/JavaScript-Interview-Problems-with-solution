function createCounter() {
    let count = 0; // 🔒 private variable

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2

// ❌ Not accessible
console.log(counter.count); // undefined


///////////////



function createBankAccount(initialBalance) {
    let balance = initialBalance; // 🔒 private

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.deposit(500));   // 1500
console.log(account.withdraw(200));  // 1300
console.log(account.getBalance());   // 1300

console.log(account.balance);   // 1300