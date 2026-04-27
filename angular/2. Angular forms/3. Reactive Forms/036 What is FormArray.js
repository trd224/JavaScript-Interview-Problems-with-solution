// FormArray in Angular is a class that represents a dynamic list of form controls or form groups, where controls are accessed by index instead of name.

// ✅ Simple Meaning

// We use FormArray when we need multiple similar fields dynamically (like skills, phone numbers, etc.)


// ✅ Example
// import { FormArray, FormControl } from '@angular/forms';

// skills = new FormArray([
//   new FormControl('Angular'),
//   new FormControl('React')
// ]);

// <div *ngFor="let skill of skills.controls; let i = index">
//   <input [formControl]="skill">
// </div>



// 🔥 Key Points
// Uses index (0,1,2...) instead of names
// Can add/remove controls dynamically
// Useful for dynamic forms


// ✅ Add Control Dynamically
// this.skills.push(new FormControl('Vue'));



// ⚡ Example Output
// ["Angular", "React", "Vue"]