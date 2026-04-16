// 🔹 What is *ngIf Directive in Angular?

// *ngIf is a structural directive in Angular used to conditionally add or remove elements from the DOM.

// 🔹 One-Line Interview Answer

// 👉 *ngIf is a structural directive in Angular that conditionally adds or removes elements from the DOM based on a boolean expression.





//<p *ngIf="isLoggedIn">Welcome User!</p>

// 🔹 Using else

//<p *ngIf="isLoggedIn; else loginBlock">Welcome</p>

//<ng-template #loginBlock>
//  <p>Please Login</p>
//</ng-template>