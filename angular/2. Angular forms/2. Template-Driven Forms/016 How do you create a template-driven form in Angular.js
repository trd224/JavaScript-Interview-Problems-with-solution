// A template-driven form in Angular is created using directives like ngModel inside the HTML template, where Angular automatically manages form state.

// ✅ Steps to create a Template-Driven Form

// 1. Import FormsModule
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [FormsModule]
// })
// export class AppModule {}

// 2. Create HTML Form
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <input 
//     type="text" 
//     name="username" 
//     ngModel 
//     placeholder="Enter username"
//     required
//   />

//   <input 
//     type="email" 
//     name="email" 
//     ngModel 
//     placeholder="Enter email"
//   />

//   <button type="submit">Submit</button>

// </form>

// 3. Component Class
// onSubmit(form: any) {
//   console.log(form.value);
// }

// 🔥 Key Points
// ngForm → tracks the whole form
// ngModel → creates form controls
// name → required for each control
// Angular automatically tracks value, validity, touched, dirty