


// 💡 What is compareWith in Angular <select>?

// compareWith is an input on the <select> element that tells Angular how to compare selected value with dropdown options, especially when you are using objects instead of simple values (string/number).


// example

// Select Country
// ----------------
// India
// USA   ✔ (highlighted / selected)
// UK



// 🧠 Why it is needed

// By default, Angular compares values using:

// ===

// This works for:

// strings ✅
// numbers ✅

// But fails for:

// objects ❌ (because objects are compared by reference, not by content)
// ❌ Problem without compareWith
// selected = { id: 2, name: 'USA' }

// options = [
//   { id: 1, name: 'India' },
//   { id: 2, name: 'USA' }
// ];

// Even though both USA objects look same, Angular checks:

// { id: 2, name: 'USA' } === { id: 2, name: 'USA' }  ❌ false

// 👉 So Angular cannot match and cannot highlight selected option.

// ✅ Solution: compareWith

// You define how Angular should compare values.

// 🔹 HTML
// <select [(ngModel)]="selectedCountry" [compareWith]="compareFn">
//   <option *ngFor="let c of countries" [ngValue]="c">
//     {{ c.name }}
//   </option>
// </select>
// 🔹 TS
// compareFn(c1: any, c2: any): boolean {
//   return c1 && c2 ? c1.id === c2.id : c1 === c2;
// }
// 🚀 When do you need compareWith?

// You need it when:

// ✅ 1. Dropdown uses objects
// { id: 1, name: 'India' }
// ✅ 2. Data comes from API

// (selected value and dropdown list are different object instances)

// ✅ 3. Pre-selecting values from backend

// (form value loaded separately from options)

// ❌ When you DON’T need it
// Simple string values:
// ['India', 'USA']
// Numbers:
// [1, 2, 3]
// 🎯 Final Simple Definition

// 👉 compareWith is used to tell Angular how to match selected value with dropdown options when using objects instead of simple values.