// We handle date input fields in Angular using type="date" with ngModel or FormControl, while remembering that the value is always YYYY-MM-DD even if the UI shows a different format.

// ✅ Template-driven form
// <input type="date" name="dob" [(ngModel)]="dob">

// dob: string = '2026-04-27';

// ✅ Reactive form
// dob = new FormControl('2026-04-27');
// <input type="date" [formControl]="dob">

// 🔥 Important Points
// Value format is always: YYYY-MM-DD
// UI format (like DD/MM/YYYY) depends on browser/locale
// Angular does NOT control display format

// ⚠️ Convert to Date object (if needed)
// const dateObj = new Date(this.dob.value);

// ✅ Add validation
// dob = new FormControl('', Validators.required);