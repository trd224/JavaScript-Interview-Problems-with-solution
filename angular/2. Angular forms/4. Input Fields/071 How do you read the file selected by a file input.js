// We read the file selected by a file input in Angular using the (change) event and accessing event.target.files.

// ✅ Basic way to read file
// <input type="file" (change)="onFileSelected($event)">
// onFileSelected(event: any) {
//   const file = event.target.files[0];
//   console.log(file);
// }

// 🔥 What we get from file
// {
//   name: "image.png",
//   size: 102400,
//   type: "image/png",
//   lastModified: 123456789
// }

// ✅ Reading "file content" (optional)

// If we want file data (text/image), we use FileReader:

// 📄 Read text file
// onFileSelected(event: any) {
//   const file = event.target.files[0];

//   const reader = new FileReader();

//   reader.onload = () => {
//     console.log(reader.result); // file content
//   };

//   reader.readAsText(file);
// }

// 🖼️ Read image file (base64)
// reader.readAsDataURL(file);

// ⚡ Key Points
// event.target.files[0] → gives selected file
// Use FileReader to read file content
// Works for text, images, PDFs, etc.


// ⚡ Interview Line

// We read a selected file using (change) event and event.target.files, and optionally use FileReader to access file content.