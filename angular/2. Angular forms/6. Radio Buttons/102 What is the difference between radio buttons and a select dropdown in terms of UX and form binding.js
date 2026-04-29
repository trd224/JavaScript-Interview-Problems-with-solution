// Radio buttons and a select dropdown both allow single selection, but they differ in UX (user experience) and how they’re used in forms.

// ✅ UX Difference
// 🔘 Radio Buttons
// All options are visible at once
// Faster selection (one click)
// Best for 2–5 options
// Good when choices should be immediately clear

// 👉 Example: Gender, Yes/No

// ⬇️ Select Dropdown
// Options are hidden until clicked
// Saves space in UI
// Better for many options
// Requires 2 clicks (open + select)

// 👉 Example: Country list, categories

// ✅ Form Binding Difference
// 🔘 Radio Buttons
// Multiple inputs → one FormControl / ngModel
// Each radio has a different value
// <input type="radio" formControlName="gender" value="male">
// <input type="radio" formControlName="gender" value="female">
// ⬇️ Select Dropdown
// Single <select> element → one FormControl / ngModel
// <select formControlName="gender">
//   <option value="male">Male</option>
//   <option value="female">Female</option>
// </select>
// ⚡ One-line (your style)

// Radio buttons show all options for quick selection, while select dropdown saves space by hiding options, both binding to a single value in forms.

// 💡 Key Insight
// Radio → better UX clarity
// Select → better UI space efficiency