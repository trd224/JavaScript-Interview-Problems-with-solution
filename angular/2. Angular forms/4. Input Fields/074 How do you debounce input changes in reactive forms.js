// ✅ One-line definition (your style)

// Debouncing in Reactive Forms is delaying input value changes using RxJS debounceTime() so actions (like API calls) trigger only after the user stops typing.

// ✅ Example (Reactive Form with debounce)

// TS

// import { FormControl } from '@angular/forms';
// import { debounceTime } from 'rxjs/operators';

// searchControl = new FormControl('');

// ngOnInit() {
//   this.searchControl.valueChanges
//     .pipe(debounceTime(300)) // wait 300ms after typing stops
//     .subscribe(value => {
//       console.log('Search:', value);
//       // call API here
//     });
// }

// HTML

// <input type="text" [formControl]="searchControl" placeholder="Search...">



// 🔍 How it works
// User types: a → ap → app
// Without debounce → 3 API calls ❌
// With debounce (300ms) → 1 API call ✅ (after user stops typing)



// 🔥 Best Practice (with distinct values)
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// this.searchControl.valueChanges
//   .pipe(
//     debounceTime(300),
//     distinctUntilChanged()
//   )
//   .subscribe(value => {
//     console.log(value);
//   });

// ✔ debounceTime → delay
// ✔ distinctUntilChanged → ignore same value