// We add validation to a template-driven form in Angular using HTML validation attributes and Angular directives like required, minlength, pattern, etc.

// ✅ Basic Example

// <form #myForm="ngForm">

//   <input 
//     name="username" 
//     ngModel 
//     required 
//     minlength="3"
//     #u="ngModel"
//   >

//   <p *ngIf="u.invalid && u.touched">
//     Username is required (min 3 chars)
//   </p>

//   <button [disabled]="myForm.invalid">Submit</button>

// </form>



// 🔥 How it works

// We add validation using attributes like:
//     required
//     minlength
//     maxlength
//     pattern
// Angular automatically updates control state:
//     valid / invalid
//     touched / untouched
//     dirty / pristine



// ✅ Common Validators
// <input name="email" ngModel required email>

// <input name="password" ngModel required minlength="6">

// <input name="phone" ngModel pattern="[0-9]{10}">



// 🔍 Access validation state
// <input name="email" ngModel #e="ngModel">

// <p *ngIf="e.errors?.required">Email is required</p>
// <p *ngIf="e.errors?.email">Invalid email</p>