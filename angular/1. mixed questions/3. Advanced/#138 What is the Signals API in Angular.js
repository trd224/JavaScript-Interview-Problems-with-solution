// 👉 One-Line Interview Answer:
// The Signals API in Angular is a "reactive state management system" that lets us store values and automatically update the UI when those values change.


// 🔥 What is Signals API?

// 👉 In simple words:
// Signals = reactive variables that update UI automatically


// 🔹 Basic Example
// import { signal } from '@angular/core';

// count = signal(0);

// <p>{{ count() }}</p>
// <button (click)="count.set(count() + 1)">+</button>

//✔ When value changes → UI updates automatically



// 🔹 Core Parts of Signals API

// 1️⃣ signal()

// 👉 Creates reactive value

// count = signal(0);

// 2️⃣ computed()

// 👉 Derived value from signals

// double = computed(() => this.count() * 2);

// 3️⃣ effect()

// 👉 Runs side effects when signal changes

// effect(() => {
//   console.log(this.count());
// });