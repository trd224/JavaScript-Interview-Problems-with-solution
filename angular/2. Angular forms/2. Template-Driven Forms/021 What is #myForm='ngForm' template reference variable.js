// #myForm="ngForm" in Angular is a template reference variable that gives us access to the NgForm directive "instance" of the form.


// 🔍 Break it down
// <form #myForm="ngForm">
// </form>
// #myForm → we create a local variable in the template
// "ngForm" → we tell Angular to assign the NgForm object to this variable


// ✅ What it actually holds

// myForm is not the HTML form, it is the Angular NgForm object, which gives us:

// myForm.value → all form values
// myForm.valid → form validation status
// myForm.controls → all controls
// myForm.touched, dirty, etc.



// ✅ Example
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  
//   <input name="username" ngModel required>

//   <button type="submit">Submit</button>

// </form>

// <p>{{ myForm.value | json }}</p>
// 🧠 Important Concept

// Angular exports the NgForm directive using the name "ngForm"
// 👉 That’s why we write:

// #myForm="ngForm"


// ⚡ Interview Line

// #myForm="ngForm" creates a template reference variable that points to the Angular NgForm directive instance, not the native form element.