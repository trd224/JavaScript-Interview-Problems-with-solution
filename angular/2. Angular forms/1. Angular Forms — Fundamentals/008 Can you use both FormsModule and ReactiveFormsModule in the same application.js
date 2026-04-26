// Yes, we can use both FormsModule and ReactiveFormsModule in the same Angular application.

// 👉 We just import both modules:

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   imports: [FormsModule, ReactiveFormsModule]
// })

// 👉 But important point:

// We should not mix ngModel (template-driven) with reactive form directives (formControl, formGroup) on the same form control

// 👉 In short:
// We can use both in one app, but keep them separate within individual forms.