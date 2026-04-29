// The difference between type="text" and type="number" in Angular is mainly how the browser handles input and how the value is interpreted.

// 🔥 Core Difference

// | Feature       | `type="text"`             | `type="number"`                        |
// | ------------- | ------------------------- | -------------------------------------- |
// | Input allowed | Any text                  | Only numeric input                     |
// | Value type    | Always **string**         | Usually **number** (but can be string) |
// | UI behavior   | Normal input              | Shows number spinner controls          |
// | Validation    | No built-in numeric check | Built-in numeric validation            |



// ✅ Example (Template-driven)
// <input type="text" [(ngModel)]="value">
// <input type="number" [(ngModel)]="age">
// value = '123';
// age = 25;

// 🔍 Behavior
// console.log(typeof value); // string
// console.log(typeof age);   // number (but may be string if empty)

// ⚠️ Important Note
// type="number" can still return:
// null
// '' (empty string)
// So sometimes we convert:
// const num = Number(this.age);

// 🔥 When to use
// text → names, emails, general input
// number → age, price, quantity