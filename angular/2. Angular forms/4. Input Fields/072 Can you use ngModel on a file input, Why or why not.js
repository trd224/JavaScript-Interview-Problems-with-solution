// No, you cannot reliably use ngModel on a file input in Angular.

// Why?
// File inputs (<input type="file">) are handled differently by browsers for security reasons. The file value is read-only, and Angular’s ngModel tries to do two-way data binding, which is not allowed for file inputs.



// ✅ Correct Way (Use event binding instead)

// <input type="file" (change)="onFileSelect($event)">

// onFileSelect(event: any) {
//   const file = event.target.files[0];
//   console.log(file);
// }


// ❌ Wrong Way (ngModel)

// <input type="file" [(ngModel)]="file">

// 👉 This will not work properly because Angular cannot set or update the file input value.



// 🔑 One-line definition (as you prefer):

// File input in Angular is handled using (change) event instead of ngModel because its value is read-only for security reasons.





// ✅ 1. Template-Driven Form Example

// Definition (one-line):
// Template-driven file input uses (change) event to capture file and ngForm for form handling.

// HTML
// <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">

//   <input type="text" name="username" ngModel placeholder="Enter name">

//   <input type="file" (change)="onFileSelect($event)">

//   <button type="submit">Submit</button>

// </form>

// TS

// file: File | null = null;

// onFileSelect(event: any) {
//   this.file = event.target.files[0];
// }

// onSubmit(form: any) {
//   const formData = new FormData();
//   formData.append('username', form.value.username);
  
//   if (this.file) {
//     formData.append('file', this.file);
//   }

//   console.log('Form Submitted', formData);
// }






// ✅ 2. Reactive Form Example

// Definition (one-line):
// Reactive form file input uses FormControl for structure and (change) event to patch file manually.

// HTML
// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <input type="text" formControlName="username" placeholder="Enter name">

//   <input type="file" (change)="onFileSelect($event)">

//   <button type="submit">Submit</button>

// </form>

// TS

// import { FormGroup, FormControl } from '@angular/forms';

// myForm = new FormGroup({
//   username: new FormControl(''),
//   file: new FormControl(null)
// });

// onFileSelect(event: any) {
//   const file = event.target.files[0];
//   this.myForm.patchValue({ file: file });
// }

// onSubmit() {
//   const formData = new FormData();
//   formData.append('username', this.myForm.get('username')?.value);

//   const file = this.myForm.get('file')?.value;
//   if (file) {
//     formData.append('file', file);
//   }

//   console.log('Form Submitted', formData);
// }




// You can create many FormControls in TS without using formControlName in HTML, and Angular will not throw an error—they will just remain unused.



// patchValue() is not mandatory—you can directly append the file to FormData, but then the file won’t be stored inside the Reactive Form.


// ✅ Option 1: WITHOUT patchValue() (Direct append)

// onFileSelect(event: any) {
//   const file = event.target.files[0];

//   const formData = new FormData();
//   formData.append('username', this.myForm.get('username')?.value);
//   formData.append('file', file);

//   console.log(formData);
// }

// ✔ Works perfectly
// ✔ Simple
// ❌ File is NOT stored in form state

// ✅ Option 2: WITH patchValue() (Recommended in Reactive Forms)

// onFileSelect(event: any) {
//   const file = event.target.files[0];
//   this.myForm.patchValue({ file: file });
// }

// ✔ File becomes part of form model
// ✔ Useful for validation
// ✔ Clean separation (select now, submit later)


// 🔥 When should you use patchValue()?

// Use it when:

// You submit form later (not immediately)
// You want validation (file size/type)
// You want to track form state (dirty, touched, etc.)


// ⚠️ When you can skip it

// Skip patchValue() when:

// You upload file immediately after selection
// You don’t care about storing file in form


// 🧠 Final clarity

// | Approach      | patchValue | Form stores file | Use case             |
// | ------------- | ---------- | ---------------- | -------------------- |
// | Direct append | ❌ No       | ❌ No             | Quick upload         |
// | Reactive way  | ✅ Yes      | ✅ Yes            | Proper form handling |
