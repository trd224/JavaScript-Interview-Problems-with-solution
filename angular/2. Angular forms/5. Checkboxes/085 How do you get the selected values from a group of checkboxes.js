// Getting selected checkbox values depends on how you built them (FormArray or manual push).

// ✅ Method 1: FormArray (boolean approach)
// TS
// onSubmit() {
//   const selectedValues = this.skillsArray.value
//     .map((checked: boolean, i: number) => checked ? this.options[i] : null)
//     .filter(v => v !== null);

//   console.log(selectedValues);
// }
// ⚡ Output
// ['HTML', 'JS']
// ✅ Method 2: FormArray (store values directly)

// If you used push/remove method:

// console.log(this.skillsArray.value);
// ⚡ Output
// ['HTML', 'JS']
// ⚡ One-line (your style)

// Selected checkbox values are retrieved from FormArray by filtering checked controls or directly reading stored values.

// 💡 Tip
// Boolean FormArray → map + filter
// Value-based FormArray → direct .value