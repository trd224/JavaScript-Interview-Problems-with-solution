// We create a reactive form in Angular by defining the form structure in the component using FormGroup and FormControl, and binding it to the template using formGroup and formControlName.

// ✅ Step 1: Import ReactiveFormsModule
// import { ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   imports: [ReactiveFormsModule]
// })
// export class AppModule {}

// ✅ Step 2: Create Form in Component
// import { FormGroup, FormControl } from '@angular/forms';

// export class AppComponent {

//   myForm = new FormGroup({
//     username: new FormControl(''),
//     email: new FormControl('')
//   });

//   onSubmit() {
//     console.log(this.myForm.value);
//   }
// }

// ✅ Step 3: Bind in Template
// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <input formControlName="username">
//   <input formControlName="email">

//   <button type="submit">Submit</button>

// </form>




// 🔥 Key Points
// Form is created in TypeScript (not HTML)
// Gives full control & scalability
// Easier for validation & testing