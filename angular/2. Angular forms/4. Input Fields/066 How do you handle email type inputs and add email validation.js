// We handle email inputs in Angular by using type="email" and adding Angular’s email validation (email or Validators.email).

// ✅ 1. Template-driven form
// <form #f="ngForm">

//   <input 
//     type="email" 
//     name="email" 
//     ngModel 
//     required 
//     email
//     #e="ngModel"
//   >

//   <p *ngIf="e.errors?.required && e.touched">
//     Email is required
//   </p>

//   <p *ngIf="e.errors?.email && e.touched">
//     Invalid email format
//   </p>

// </form>

// 👉 Uses:

// type="email" → browser-level validation
// email directive → Angular validation



// ✅ 2. Reactive form
// import { FormControl, Validators } from '@angular/forms';

// email = new FormControl('', [
//   Validators.required,
//   Validators.email
// ]);


// <input type="email" [formControl]="email">

// <p *ngIf="email.errors?.required && email.touched">
//   Email is required
// </p>

// <p *ngIf="email.errors?.email && email.touched">
//   Invalid email format
// </p>


// 🔥 Key Points
// type="email" → basic browser validation
// Angular email / Validators.email → proper validation in form
// Works with both template-driven and reactive forms