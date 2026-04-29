// In a template-driven form in Angular, you get the form reference using a template reference variable with ngForm.

// ✅ Basic Syntax
// <form #myForm="ngForm">
// </form>

// 👉 #myForm = template reference variable
// 👉 "ngForm" = Angular form directive export

// ✅ Example (access in template)
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <input name="username" ngModel required>

//   <button type="submit">Submit</button>

// </form>

// <p>Form Valid: {{ myForm.valid }}</p>

// ✅ Component
// onSubmit(form: any) {
//   console.log(form.value);
// }


// 🔥 What you get from form reference

// myForm gives:

// value → all form values
// valid / invalid
// touched / dirty
// controls