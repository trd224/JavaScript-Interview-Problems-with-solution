// To reset a radio button selection to no option selected, set the FormControl value to null (or use reset()).

// ✅ Reactive Form
// TS
// this.form.get('gender')?.setValue(null); // ✅ clears selection

// 👉 OR

// this.form.get('gender')?.reset(); // also sets to null
// HTML
// <label><input type="radio" formControlName="gender" value="male"> Male</label>
// <label><input type="radio" formControlName="gender" value="female"> Female</label>
// ✅ Template-driven Form
// <button type="button" (click)="gender = null">Reset</button>

// <label><input type="radio" name="gender" value="male" [(ngModel)]="gender"> Male</label>
// <label><input type="radio" name="gender" value="female" [(ngModel)]="gender"> Female</label>
// ⚡ One-line (your style)

// Reset radio selection by setting the control/model value to null.

// 💡 Tip

// Make sure no radio has checked hardcoded, otherwise reset won’t reflect properly.