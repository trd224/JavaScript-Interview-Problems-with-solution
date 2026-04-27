// ngModelGroup in Angular is used to group multiple form controls into a logical object inside a template-driven form.

// ✅ Simple Meaning

// We use ngModelGroup to organize related fields together (like address, user info, etc.)

// ✅ Example

// <form #f="ngForm">

//   <div ngModelGroup="address">
//     <input name="city" ngModel>
//     <input name="pincode" ngModel>
//   </div>

// </form>

// <p>{{ f.value | json }}</p>

// 🔥 Output Structure
// {
//   "address": {
//     "city": "Delhi",
//     "pincode": "110001"
//   }
// }

// 👉 We get a nested object instead of flat values


// 🔍 Why we use it
// Group related fields
// Create nested form data
// Manage validation at group level