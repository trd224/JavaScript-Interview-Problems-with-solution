// ✅ One-line definition (your style)

// Autocomplete in Angular is an input field that shows filtered suggestions dynamically based on user input using events or Reactive Forms.

// ✅ 1. Simple Autocomplete (without library)
// HTML
// <input type="text" [(ngModel)]="searchText" (input)="onSearch()" placeholder="Search...">

// <ul *ngIf="filteredList.length">
//   <li *ngFor="let item of filteredList" (click)="selectItem(item)">
//     {{ item }}
//   </li>
// </ul>
// TS
// searchText = '';
// list = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
// filteredList: string[] = [];

// onSearch() {
//   this.filteredList = this.list.filter(item =>
//     item.toLowerCase().includes(this.searchText.toLowerCase())
//   );
// }

// selectItem(item: string) {
//   this.searchText = item;
//   this.filteredList = [];
// }



// ✅ 2. Reactive Form Autocomplete (Better approach)
// HTML
// <input type="text" [formControl]="searchControl" placeholder="Search...">

// <ul *ngIf="filteredList.length">
//   <li *ngFor="let item of filteredList" (click)="selectItem(item)">
//     {{ item }}
//   </li>
// </ul>
// TS
// import { FormControl } from '@angular/forms';

// searchControl = new FormControl('');
// list = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
// filteredList: string[] = [];

// ngOnInit() {
//   this.searchControl.valueChanges.subscribe(value => {
//     this.filteredList = this.list.filter(item =>
//       item.toLowerCase().includes(value.toLowerCase())
//     );
//   });
// }

// selectItem(item: string) {
//   this.searchControl.setValue(item);
//   this.filteredList = [];
// }



// 🔥 Key Concepts
// input / valueChanges → detect typing
// filter() → match data
// *ngFor → show suggestions
// click → select value



// ⭐ Bonus (Best Practice)

// Use debounce to avoid too many calls:

// import { debounceTime } from 'rxjs/operators';

// this.searchControl.valueChanges
//   .pipe(debounceTime(300))
//   .subscribe(value => {
//     this.filteredList = this.list.filter(item =>
//       item.toLowerCase().includes(value.toLowerCase())
//     );
//   });