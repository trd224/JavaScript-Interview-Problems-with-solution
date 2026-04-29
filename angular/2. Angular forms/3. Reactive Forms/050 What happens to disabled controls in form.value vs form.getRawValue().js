// In Angular reactive forms, disabled controls are treated differently in form.value vs form.getRawValue().

// 🔥 Core Difference
// Method	Includes Disabled Controls?
// form.value	❌ No (excluded)
// form.getRawValue()	✅ Yes (included)


// ✅ Example
// myForm = new FormGroup({
//   username: new FormControl('John'),
//   email: new FormControl({ value: 'test@gmail.com', disabled: true })
// });


// 🔍 form.value
// console.log(this.myForm.value);

// 👉 Output:

// {
//   "username": "John"
// }

// ❌ email is missing

// 🔍 form.getRawValue()
// console.log(this.myForm.getRawValue());

// 👉 Output:

// {
//   "username": "John",
//   "email": "test@gmail.com"
// }

// ✅ Includes disabled control