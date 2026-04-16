// 🔹 What is ReactiveFormsModule in Angular?

// ReactiveFormsModule is a module used to create and manage forms using a model-driven (code-based) approach.



// 🔹 One-Line Interview Answer

// 👉 ReactiveFormsModule is an Angular module used to create model-driven forms with full control and powerful validation using FormGroup and FormControl.



// 🔹 Why Use ReactiveFormsModule?
// Better control over form data
// Easier validation
// Scalable for complex forms
// Works well with dynamic forms



// 🔹 Setup (Important 🔥)

// import { ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   imports: [ReactiveFormsModule]
// })
// export class AppModule {}




//🔹 Example
// Component (TypeScript)

// import { FormGroup, FormControl } from '@angular/forms';

// export class AppComponent {
//   loginForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl('')
//   });

//   onSubmit() {
//     console.log(this.loginForm.value);
//   }
// }


// Template (HTML)

// <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
//   <input formControlName="username">
//   <input formControlName="password">
//   <button type="submit">Login</button>
// </form>



// 🔹 Key Features
// FormGroup → Group of controls
// FormControl → Single input field
// formControlName → Bind input to control
// Strong validation support



// 🔹 Validation Example

// import { Validators } from '@angular/forms';

// loginForm = new FormGroup({
//   username: new FormControl('', Validators.required),
//   password: new FormControl('', Validators.minLength(6))
// });



// 🔹 Reactive vs Template Forms 🔥

// | Feature    | ReactiveFormsModule | FormsModule     |
// | ---------- | ------------------- | --------------- |
// | Approach   | Code-driven         | Template-driven |
// | Control    | High                | Low             |
// | Validation | Powerful            | Basic           |
// | Use Case   | Complex forms       | Simple forms    |
