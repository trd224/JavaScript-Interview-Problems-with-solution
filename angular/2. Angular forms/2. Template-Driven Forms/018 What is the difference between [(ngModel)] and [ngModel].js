// [(ngModel)] is used for two-way data binding, while [ngModel] is used for one-way (input) binding in Angular.


// 🔥 Core Difference

// | Syntax        | Type of Binding       | Data Flow             |
// | ------------- | --------------------- | --------------------- |
// | `[(ngModel)]` | Two-way binding       | Component ⇄ View      |
// | `[ngModel]`   | One-way property bind | Component → View only |




// ✅ 1. [ngModel] (One-way binding)
// <input [ngModel]="username">
// username = 'John';

// 👉 Behavior:

// Value comes from component → input field
// If user changes input → component NOT updated





// ✅ 2. [(ngModel)] (Two-way binding)
// <input [(ngModel)]="username">
// username = 'John';

// 👉 Behavior:

// Initial value set from component
// When user types → component updates automatically




// 🧠 Internally

// [(ngModel)] is just a shortcut for:

// <input [ngModel]="username" (ngModelChange)="username = $event">



// ⚡ Final Line (interview style)
// [ngModel] → only sets value
// [(ngModel)] → sets + listens + updates value