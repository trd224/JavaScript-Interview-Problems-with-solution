// Form value is the data of only enabled controls, while rawValue includes all controls (enabled + disabled).

// Example (Reactive Form)
// TypeScript
// import { FormGroup, FormControl } from '@angular/forms';

// form = new FormGroup({
//   username: new FormControl('John'),
//   email: new FormControl({ value: 'john@gmail.com', disabled: true })
// });

// ngOnInit() {
//   console.log(this.form.value);
//   // 👉 { username: 'John' }  (email is excluded because it's disabled)

//   console.log(this.form.getRawValue());
//   // 👉 { username: 'John', email: 'john@gmail.com' }  (includes disabled field)
// }
// 🔑 In short:

// value → only enabled fields
// rawValue → all fields (including disabled)