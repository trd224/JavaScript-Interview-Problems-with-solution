// 🔹 What is Event Binding in Angular?

// Event Binding is a type of data binding used to handle user actions (events) in the UI and send them to the component (TypeScript).

// 👉 In simple words:
// Event Binding = UI action → Component function

// 🔹 Syntax
// (event)="function()"

export class AppComponent {
  showMessage() {
    alert("Button clicked!");
  }
}

// html
// <button (click)="showMessage()">Click Me</button>


// 🔹 Common Events
// (click) → Button click
// (input) → Input change
// (change) → Value change
// (mouseover) → Mouse hover


// 🔹 Passing Data from UI

//<input (input)="getValue($event)">

// getValue(event: any) {
//   console.log(event.target.value);
// }