// You populate dropdown options dynamically by calling an API, storing the response in an array, and binding it to <option> using *ngFor.

// ✅ Full Example (Reactive Form + API)
// TS (Component)
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {

//   form: FormGroup;
//   users: any[] = []; // ✅ API data

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.form = this.fb.group({
//       user: [null]
//     });
//   }

//   ngOnInit() {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
//       .subscribe(data => {
//         this.users = data;

//         // ✅ optional: set default after API load
//         this.form.patchValue({ user: this.users[0] });
//       });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//   }
// }
// HTML
// <form [formGroup]="form" (ngSubmit)="onSubmit()">

//   <select formControlName="user">
//     <option value="">-- Select User --</option>

//     <option *ngFor="let user of users" [ngValue]="user">
//       {{ user.name }}
//     </option>
//   </select>

//   <p>Selected: {{ form.value.user?.name }}</p>

//   <button type="submit">Submit</button>

// </form>
// ✅ Output
// {
//   user: { id: 1, name: 'Leanne Graham', ... }
// }
// ⚡ One-line (your style)

// Populate dropdown from API by fetching data into an array and rendering options using *ngFor.

// 💡 Important
// Use [ngValue] for objects
// Set default using patchValue() after API response
// Use safe navigation ?. in HTML
// ❗ Required Setup
// import { HttpClientModule } from '@angular/common/http';

// Add in app.module.ts.