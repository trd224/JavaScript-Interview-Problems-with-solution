// A radio button in a template-driven form is bound using ngModel with the same name and different value, so only one option is selected at a time.

// ✅ Example (Template-driven Form)
// HTML
// <form #form="ngForm">

//<label><input type="radio" name="gender" value="male" ngModel> Male</label>

//<label><input type="radio" name="gender" value="female" ngModel> Female</label>

//<label><input type="radio" name="gender" value="other" ngModel> Other</label> 

// </form>
// ✅ Output (form.value)
// {
//   gender: 'male'
// }
// ⚡ One-line (your style)

// Radio buttons are bound using ngModel with the same name and different value to store a single selected value.

// 💡 Default Selected
// <input type="radio" name="gender" value="male" ngModel checked>