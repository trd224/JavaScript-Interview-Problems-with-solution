// The name attribute on radio buttons in template-driven forms is used to group them together so only one option can be selected and to bind them to a single ngModel value.

// ✅ Example
// <label><input type="radio" name="gender" value="male" ngModel> Male</label>
// <label><input type="radio" name="gender" value="female" ngModel> Female</label>
// <label><input type="radio" name="gender" value="other" ngModel> Other</label>
// ✅ What it does
// Groups radios → only one can be selected
// Connects all radios to one model property
// Required for Angular to register control inside ngForm
// ⚡ One-line (your style)

// name groups radio buttons and binds them to a single ngModel value in template-driven forms.

// ❗ Important

// Without name:

// Radios won’t behave as a group ❌
// Angular form binding may not work correctly ❌