// We bind a password input in Angular using ngModel or FormControl, and toggle its visibility by switching the input type between "password" and "text".

// ✅ Template-driven form
// <input 
//   [type]="show ? 'text' : 'password'" 
//   name="password" 
//   [(ngModel)]="password"
// >

// <button type="button" (click)="toggle()">
//   {{ show ? 'Hide' : 'Show' }}
// </button>

// password = '';
// show = false;

// toggle() {
//   this.show = !this.show;
// }




// ✅ Reactive form
// password = new FormControl('');
// show = false;

// toggle() {
//   this.show = !this.show;
// }
// <input 
//   [type]="show ? 'text' : 'password'" 
//   [formControl]="password"
// >

// <button type="button" (click)="toggle()">
//   {{ show ? 'Hide' : 'Show' }}
// </button>


// 🔥 How it works
// [type] binding dynamically changes input type
// "password" → hidden
// "text" → visible
// Button toggles boolean (show)