//ngModel in a template-driven form in Angular is a directive used to create and register a form control, track its value and state, and bind it to the form.


// 🔍 Important (your doubt)
// ngModel → directive (one-way / control creation)
// [(ngModel)] → two-way data binding (value + update)



// ✅ Example (only ngModel, not two-way)

// <form #f="ngForm">
//   <input type="text" name="username" ngModel>
// </form>

// 👉 Here:

// ngModel creates a FormControl
// Registers it inside ngForm
// Tracks state like → valid, dirty, touched





// ✅ Example (with template reference)
// <input type="text" name="username" ngModel #u="ngModel">

// <p>Value: {{ u.value }}</p>
// <p>Valid: {{ u.valid }}</p>

// 👉 You can access:

// u.value
// u.valid
// u.touched, u.dirty



// ⚡ Summary
// ngModel = creates + manages form control
// No need of [(ngModel)] unless you want two-way binding with component