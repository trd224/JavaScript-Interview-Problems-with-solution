// We reset a template-driven form in Angular using the reset() method of the NgForm reference.

// ✅ Basic Syntax

// <form #myForm="ngForm">
// </form>

// <button (click)="myForm.reset()">Reset</button>

// ✅ Example (with submit)

// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <input name="username" ngModel required>
//   <input name="email" ngModel>

//   <button type="submit">Submit</button>
//   <button type="button" (click)="myForm.reset()">Reset</button>

// </form>

// ✅ Component

// onSubmit(form: any) {
//   console.log(form.value);
//   form.reset(); // ✅ reset after submit
// }

// 🔥 What reset() does
// Clears all form values
// Resets validation state
// Marks controls as pristine & untouched


// ⚡ Optional (set default values)
// form.reset({
//   username: 'John',
//   email: 'test@gmail.com'
// });