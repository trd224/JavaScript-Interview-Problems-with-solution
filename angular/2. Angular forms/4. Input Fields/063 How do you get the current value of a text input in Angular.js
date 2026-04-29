// We get the current value of a text input in Angular depending on the form type—using ngModel (template-driven) or FormControl (reactive forms).

// ✅ 1. Template-driven form (ngModel)
// <input [(ngModel)]="username" name="username">
// console.log(this.username);

// 👉 Always gives latest value


// ✅ 2. Using template reference variable
// <input #inputRef type="text">
// <button (click)="getValue(inputRef.value)">Get</button>
// getValue(val: string) {
//   console.log(val);
// }


// ✅ 3. Reactive form (FormControl)
// username = new FormControl('');
// <input [formControl]="username">
// console.log(this.username.value);


// 🔥 Real-time tracking
// this.username.valueChanges.subscribe(value => {
//   console.log(value);
// });