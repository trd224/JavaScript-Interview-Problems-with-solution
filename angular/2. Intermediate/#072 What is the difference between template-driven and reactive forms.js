// 🔹 Difference between Template-Driven and Reactive Forms

// 👉 Template-driven forms are defined in the template using directives like ngModel, while reactive forms are defined in the component using FormControl and FormGroup.



// | Feature      | Template-Driven Forms | Reactive Forms            |
// | ------------ | --------------------- | ------------------------- |
// | Definition   | In HTML (template)    | In TypeScript (component) |
// | Approach     | Declarative           | Programmatic              |
// | Data Binding | Two-way (`ngModel`)   | One-way (via form model)  |
// | Validation   | Template-based        | Code-based (more control) |
// | Scalability  | Simple forms          | Complex forms             |



// 🔹 Example

// Template-Driven Form

// <input [(ngModel)]="name" name="name">


// Reactive Form

// name = new FormControl('');
// <input [formControl]="name">


// 🔹 Key Difference 🔥
// Template-driven → Easy, less code, small forms
// Reactive → Powerful, scalable, large forms


// 🔹 One-Line Interview Answer

// 👉 Template-driven forms are created in the template using ngModel, while reactive forms are created in the component using FormControl and FormGroup.