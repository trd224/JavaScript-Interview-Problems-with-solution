// We bind an input field in a reactive form in Angular using formControlName (inside a FormGroup) or [formControl] (for a standalone control).


// ✅ Method 1: Using formControlName (most common)

// Component

// myForm = new FormGroup({
//   username: new FormControl('')
// });

// Template

// <form [formGroup]="myForm">
//   <input formControlName="username">
// </form>

// 👉 Binds input to myForm.controls.username





// ✅ Method 2: Using [formControl] (standalone)

// Component

// username = new FormControl('');

// Template

// <input [formControl]="username">

// 👉 Direct binding without FormGroup




// 🔥 Key Difference
// formControlName → used inside FormGroup
// [formControl] → used for single/standalone control