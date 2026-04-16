// 🔹 What is *ngFor Directive in Angular?

// *ngFor is a structural directive used to loop through a list (array) and display data in the UI.

//<div *ngFor="let item of items">
//  {{ item }}
//</div>

// 🔹 Other Useful Variables
// index → current index
// first → true if first item
// last → true if last item
// even / odd → styling purposes


//<li *ngFor="let fruit of fruits; let i = index">
//  {{ i }} - {{ fruit }}
//</li>

// example
export class AppComponent {
  items = ["Apple", "Banana", "Mango", "Orange"];
}

// <ul>
//   <li *ngFor="let item of items; 
//               let i = index; 
//               let isFirst = first; 
//               let isLast = last; 
//               let isEven = even; 
//               let isOdd = odd">

//     {{ i }} | {{ item }} |
//     First: {{ isFirst }} |
//     Last: {{ isLast }} |
//     Even: {{ isEven }} |
//     Odd: {{ isOdd }}

//   </li>
// </ul>


// | Index | Item   | First | Last  | Even  | Odd   |
// | ----- | ------ | ----- | ----- | ----- | ----- |
// | 0     | Apple  | true  | false | true  | false |
// | 1     | Banana | false | false | false | true  |
// | 2     | Mango  | false | false | true  | false |
// | 3     | Orange | false | true  | false | true  |





// 🔹 Styling Example (Real Use 🔥)
{/* <li *ngFor="let item of items; let isEven = even" [style.background]="isEven ? 'lightgray' : 'white'">
  {{ item }}
</li> */}


// 🔹 Simple Interview Line

// 👉 index, first, last, even, and odd are local variables in *ngFor used to track position and apply logic while looping.