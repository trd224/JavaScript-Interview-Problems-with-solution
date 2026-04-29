// We handle file input in Angular by listening to the (change) event and manually reading the selected file from event.target.files, because file inputs cannot be automatically bound like normal form fields.

// 🔥 Key Idea
// File inputs are not two-way bindable
// We must handle them manually



// ✅ Template-driven approach

// <input type="file" (change)="onFileChange($event)">
// selectedFile!: File;

// onFileChange(event: any) {
//   this.selectedFile = event.target.files[0];
//   console.log(this.selectedFile);
// }



// ✅ Reactive form approach

// <form [formGroup]="myForm">
//   <input type="file" formControlName="file" (change)="onFileChange($event)">
// </form>
// myForm = new FormGroup({
//   file: new FormControl(null)
// });

// onFileChange(event: any) {
//   const file = event.target.files[0];
//   this.myForm.patchValue({ file });
// }



// 🔥 Upload example (FormData)
// const formData = new FormData();
// formData.append('file', this.selectedFile);





// ✅ Full Example: File Upload in Reactive Form

// 🔹 1. Component (TS)

// import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html'
// })
// export class FileUploadComponent {

//   selectedFile!: File;

//   myForm = new FormGroup({
//     file: new FormControl(null)
//   });

//   // capture file
//   onFileChange(event: any) {
//     const file = event.target.files[0];

//     if (file) {
//       this.selectedFile = file;

//       // store in form
//       this.myForm.patchValue({
//         file: file
//       });
//     }
//   }

//   // submit form
//   onSubmit() {
//     const formData = new FormData();
//     formData.append('file', this.selectedFile);

//     console.log('Uploading file:', this.selectedFile);

//     // Example API call (not real endpoint)
//     // this.http.post('api/upload', formData).subscribe();
//   }
// }



// 🔹 2. Template (HTML)

// <form [formGroup]="myForm" (ngSubmit)="onSubmit()">

//   <input 
//     type="file" 
//     formControlName="file" 
//     (change)="onFileChange($event)"
//   >

//   <button type="submit">Upload</button>

// </form>

// <!-- Preview -->
// <p *ngIf="selectedFile">
//   Selected File: {{ selectedFile.name }}
// </p>



// FormData is a built-in Web API used in Angular (and JavaScript) to construct key–value pairs for sending form data—especially files—to a server.

// 🔥 Simple Meaning

// We use FormData when we want to send:

// Files 📁
// Text fields
// Mixed form data
// 👉 to backend via HTTP



// ✅ Basic Example
// const formData = new FormData();

// formData.append('username', 'John');
// formData.append('email', 'john@gmail.com');

// 📁 File Upload Example
// const formData = new FormData();
// formData.append('file', this.selectedFile);

// 🚀 Angular HTTP Example
// this.http.post('api/upload', formData).subscribe(res => {
//   console.log(res);
// });