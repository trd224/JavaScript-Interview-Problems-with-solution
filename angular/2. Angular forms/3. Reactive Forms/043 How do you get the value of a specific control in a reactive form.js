// We get the value of a specific control in a reactive form in Angular using get() or direct access via controls, and then reading .value.


// ✅ Method 1: Using get() (most common)

// const value = this.myForm.get('username')?.value;



// ✅ Method 2: Using controls

// const value = this.myForm.controls['username'].value;

// ✅ Example

// myForm = new FormGroup({
//   username: new FormControl('John')
// });

// const usernameValue = this.myForm.get('username')?.value;
// console.log(usernameValue); // John

// 🔍 For nested controls
// const city = this.myForm.get('address.city')?.value;