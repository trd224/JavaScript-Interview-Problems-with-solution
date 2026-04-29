// To bind an object as the value of a select option, you use [ngValue] instead of [value].

// ✅ Full Example (Reactive Form with Object Binding)
// TS
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   form: FormGroup;

//   users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Alex' }
//   ];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       user: [this.users[1]] // ✅ default object (Jane)
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="user">
//     <option *ngFor="let user of users" [ngValue]="user">
//       {{ user.name }}
//     </option>
//   </select>

//   <p>Selected: {{ form.value.user.name }}</p>

//   <button type="submit">Submit</button>

// </form>
// ✅ Output
// {
//   user: { id: 2, name: 'Jane' }
// }
// ⚡ One-line (your style)

// Use [ngValue] to bind objects as select option values instead of [value].



// 💡 Template-driven Version (Object Binding)
// <select name="user" [(ngModel)]="selectedUser">
//   <option *ngFor="let user of users" [ngValue]="user">
//     {{ user.name }}
//   </option>
// </select>