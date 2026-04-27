// We submit a template-driven form in Angular using the (ngSubmit) event on the <form> element.

// ✅ Basic Syntax
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
// </form>

// 👉 (ngSubmit) triggers when we click submit button or press Enter

// ✅ Full Example
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <input name="username" ngModel required>
//   <input name="email" ngModel>

//   <button type="submit">Submit</button>

// </form>
// ✅ Component
// onSubmit(form: any) {
//   console.log(form.value);
// }
// 🔥 How it works
// Angular listens to form submit event
// (ngSubmit) calls our method
// We get full form data using form.value



// ⚡ Interview Line

// We use (ngSubmit) on the form and pass the NgForm reference to handle submission.