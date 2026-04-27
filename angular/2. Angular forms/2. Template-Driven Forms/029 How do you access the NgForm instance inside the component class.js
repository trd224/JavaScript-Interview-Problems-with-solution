// We access the NgForm instance inside the component class in Angular using @ViewChild.


// ✅ Method 1: Using @ViewChild

// import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';

// export class AppComponent {

//   @ViewChild('myForm') form!: NgForm;

//   ngAfterViewInit() {
//     console.log(this.form.value);
//   }
// }

// ✅ Template
// <form #myForm="ngForm">
//   <input name="username" ngModel>
// </form>

// 👉 #myForm="ngForm" allows us to access it in TS using @ViewChild




// ✅ Method 2: Passing form on submit (simpler)

// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
// </form>

// onSubmit(form: NgForm) {
//   console.log(form.value);
// }



// 🔥 Key Point
// @ViewChild → access form anytime in component
// (ngSubmit) → access form on submit only