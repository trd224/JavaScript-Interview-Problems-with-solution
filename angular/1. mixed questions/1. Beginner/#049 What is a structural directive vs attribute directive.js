// 🔹 Difference between Structural Directive and Attribute Directive

// 👉 Structural directives change the structure of the DOM, while attribute directives change the appearance or behavior of elements.


// 🔹 Comparison Table

// | Feature  | Structural Directive | Attribute Directive           |
// | -------- | -------------------- | ----------------------------- |
// | Purpose  | Modify DOM structure | Modify style/behavior         |
// | DOM      | Add/Remove elements  | Does not remove elements      |
// | Syntax   | Uses `*` (asterisk)  | Uses `[ ]` (property binding) |
// | Examples | `*ngIf`, `*ngFor`    | `ngClass`, `ngStyle`          |



// 🔹 Examples
// Structural Directive

// <div *ngIf="isVisible">Hello</div>

// Attribute Directive

// <p [ngClass]="{ active: isActive }">Text</p>