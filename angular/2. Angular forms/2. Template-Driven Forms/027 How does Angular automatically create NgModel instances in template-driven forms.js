// In a template-driven form in Angular, NgModel instances are created automatically by Angular when it detects the ngModel directive on an input inside a form.


// 🔍 How it works internally

// When we write:

// <form #f="ngForm">
//   <input name="username" ngModel>
// </form>

// Angular does these steps automatically:

// 1. Detects ngModel
// Angular sees the ngModel directive on the input

// 2. Creates NgModel instance
// It internally creates a FormControl wrapper (NgModel)

// 3. Registers with parent form (NgForm)
// Since the input is inside <form> with ngForm
// Angular automatically adds it to:
// NgForm.controls
// NgForm.value

// 4. Connects everything

// So now:

// View (input field)
// Model (NgModel)
// Form (NgForm)

// are all connected automatically.



// ⚡ Example
// <form #f="ngForm">

//   <input name="email" ngModel required>

// </form>

// 👉 Angular internally creates something like:

// // conceptual representation (not real code)
// new NgModel()
// new FormControl()
// f.addControl(emailControl)



// 🧠 Key Idea

// We do NOT manually create form controls in template-driven forms — Angular auto-registers them based on ngModel + name attribute.