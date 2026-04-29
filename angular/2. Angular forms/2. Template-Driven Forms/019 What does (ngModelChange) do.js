// (ngModelChange) in Angular is an event that emits the updated value whenever the input value changes.

// ✅ Simple Meaning
// It listens to changes in the form control
// Fires every time user types or value updates
// Returns the new value

// ✅ Example
// <input [ngModel]="username" (ngModelChange)="onChange($event)">
// username = 'John';

// onChange(value: string) {
//    this.username = value; 
// }

// 👉 When user types:  

// (ngModelChange) triggers
// $event = latest value
// 🔥 Important

// It is used internally in:

// [(ngModel)]="username"

// which equals:

// [ngModel]="username" (ngModelChange)="username = $event"

// ⚡ Key Point
// (ngModelChange) = event (output binding)
// [ngModel] = input binding
// Together → two-way binding