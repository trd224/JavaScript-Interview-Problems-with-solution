// The difference between (input) and (change) events in Angular is when they fire during user interaction.

// 🔥 Core Difference
// Event	When it fires

// (input)	On every keystroke / value change
// (change)	Only when input loses focus (after change)


// ✅ (input) event
// <input (input)="onInput($event)">

// 👉 Fires:

// Every key press
// Real-time updates


// ✅ (change) event
// <input (change)="onChange($event)">

// 👉 Fires:

// After user changes value
// And leaves the field (blur)


// 🔍 Example
// User types: J → Jo → John
// Event	Trigger count
// (input)	4 times
// (change)	1 time


// ⚡ When to use
// (input) → live search, validation
// (change) → final value after editing