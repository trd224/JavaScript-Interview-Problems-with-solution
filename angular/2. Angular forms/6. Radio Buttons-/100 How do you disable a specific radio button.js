// A specific radio button is disabled by binding the disabled property conditionally (HTML) or by disabling the control (reactive forms).

// ✅ Reactive Form (disable specific option)
// HTML
// <label *ngFor="let option of options">
//   <input 
//     type="radio"
//     formControlName="gender"
//     [value]="option"
//     [disabled]="option === 'Female'"  <!-- ✅ disable only Female -->
//   >
//   {{ option }}
// </label>
// ✅ Template-driven Form
// <label *ngFor="let option of options">
//   <input 
//     type="radio"
//     name="gender"
//     [value]="option"
//     ngModel
//     [disabled]="option === 'Female'"  <!-- ✅ disable only Female -->
//   >
//   {{ option }}
// </label>
// ⚡ One-line (your style)

// Disable a specific radio button using [disabled] with a condition for that option.

// 💡 Important
// formControl.disable() ❌ disables entire group
// [disabled] ✅ disables only one radio option
// 💡 Dynamic condition example
// [disabled]="option.id === 2"