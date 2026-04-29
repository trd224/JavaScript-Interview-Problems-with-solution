// [ngValue] is an Angular directive used on <option> to bind any value (especially objects) to a select option, while value / [value] binds only string values (DOM-based).

// ✅ Full Example 1 — Using value (primitive)
// TS
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       country: ['USA'] // string
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="country">
//     <option value="India">India</option>
//     <option value="USA">USA</option>
//   </select>

// </form>
// Output
// { country: 'USA' }
// ✅ Full Example 2 — Using ngValue (object)
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
//     { id: 2, name: 'Jane' }
//   ];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       user: [this.users[0]] // object
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

// </form>
// Output
// {
//   user: { id: 1, name: 'John' }
// }
// ⚡ One-line (your style)

// [ngValue] binds full objects, while value/[value] binds only string values.


// 💡 Key Differences

// | Feature      | value / [value]  | [ngValue]                  |
// | ------------ | ---------------- | -------------------------- |
// | Data type    | String           | Any (object, number, etc.) |
// | DOM behavior | Stored as string | Stored as actual value     |
// | Use case     | Simple values    | Complex objects            |

// ❗ Common Mistake
// <option [value]="user"> <!-- ❌ converts to "[object Object]" -->
