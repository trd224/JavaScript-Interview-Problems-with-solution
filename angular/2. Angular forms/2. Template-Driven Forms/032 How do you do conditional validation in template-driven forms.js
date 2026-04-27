// We do conditional validation in template-driven forms in Angular by dynamically applying validators or checking conditions in the template using bindings and control state.

// ✅ Method 1: Conditional required using binding
// <form #f="ngForm">

//   <input type="checkbox" [(ngModel)]="isRequired" name="check">

//   <input 
//     name="phone" 
//     ngModel 
//     [required]="isRequired"
//     #p="ngModel"
//   >

//   <p *ngIf="p.invalid && p.touched">
//     Phone is required
//   </p>

// </form>

// 👉 When isRequired = true → field becomes required
// 👉 When false → validation removed

// ✅ Method 2: Using *ngIf (add/remove control)
// <input *ngIf="showField" name="email" ngModel required>

// 👉 Control exists only when condition is true

// ✅ Method 3: Custom condition in template
// <input name="password" ngModel #p="ngModel">
// <input name="confirmPassword" ngModel #c="ngModel">

// <p *ngIf="p.value !== c.value && c.touched">
//   Passwords must match
// </p>