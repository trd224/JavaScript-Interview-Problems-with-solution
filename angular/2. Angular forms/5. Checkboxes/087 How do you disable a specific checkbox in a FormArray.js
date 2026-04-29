// A checkbox in a FormArray is disabled by calling disable() on its specific FormControl using its index.

// ✅ Example
// TS
// disableCheckbox(index: number) {
//   this.skillsArray.at(index).disable(); // ✅ disable specific checkbox
// }

// enableCheckbox(index: number) {
//   this.skillsArray.at(index).enable(); // (optional) enable again
// }
// HTML
// <div formArrayName="skills">
//   <div *ngFor="let control of skillsArray.controls; let i = index">
//     <input type="checkbox" [formControlName]="i">
//     {{ options[i] }}

//     <button type="button" (click)="disableCheckbox(i)">Disable</button>
//   </div>
// </div>
// ⚡ One-line (your style)

// Disable a specific checkbox in FormArray using formArray.at(index).disable().

// 💡 Extra

// Disable at initialization:

// this.fb.control({ value: false, disabled: true })


//.at() is a method of FormArray used to get a control at a specific index.

// ✅ Syntax
// formArray.at(index)

// 💡 Equivalent way
// this.skillsArray.controls[index]