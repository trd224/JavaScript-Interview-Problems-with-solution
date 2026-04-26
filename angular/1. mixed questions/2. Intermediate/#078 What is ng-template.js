// 🔹 What is ng-template in Angular?

// 👉 ng-template is an Angular element used to define a block of HTML that is not rendered until it is explicitly used or triggered.

// 🔹 One-Line Interview Answer

// 👉 ng-template is used to define a block of HTML that is rendered only when explicitly invoked in Angular.

// 🔹 Why Use ng-template?
// Store reusable template
// Render conditionally
// Work with structural directives



// <button (click)="show = true">Show</button>

// <div *ngIf="show; else myTemplate">
//   <p>Main Content</p>
// </div>

// <ng-template #myTemplate>
//   <p>Hello from template</p>
// </ng-template>

// 🔹 How It Works
// ng-template is not rendered by default
// Rendered only when referenced (else, ngTemplateOutlet)



// 🔹 Key Points
// Not visible in DOM until used
// Works with *ngIf, *ngFor, etc.
// Used for conditional UI

