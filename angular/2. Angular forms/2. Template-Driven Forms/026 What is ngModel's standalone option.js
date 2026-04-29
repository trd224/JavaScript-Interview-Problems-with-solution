// // ngModel’s standalone option in Angular is used to prevent a form control from registering with its parent form (NgForm).


// ✅ Simple Meaning

// We use standalone: true when we want a control not to be part of the form.


// ✅ Syntax
// <input 
//   name="username" 
//   ngModel 
//   [ngModelOptions]="{ standalone: true }"
// >


// 🔥 What happens
// This input will NOT be added to myForm.controls
// It will NOT affect:
// myForm.value
// myForm.valid




// ✅ Example
// <form #myForm="ngForm">

//   <input name="username" ngModel>

//   <input 
//     name="preview" 
//     ngModel 
//     [ngModelOptions]="{ standalone: true }"
//   >

// </form>

// <p>{{ myForm.value | json }}</p>

// 👉 Output:

// {
//   "username": "John"
// }

// 👉 preview is excluded



// 🔍 When we use it
// Extra UI fields (like search, filters, preview)
// Fields not needed in final form submission



// We should NOT use standalone for confirm password, because we need it inside the form for validation.
