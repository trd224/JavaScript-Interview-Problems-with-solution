// 🔹 What is Two-Way Data Binding in Angular?

// Two-Way Data Binding is a mechanism where data flows in both directions:

// 👉 Component ⇄ View (UI)

// If data changes in the component → UI updates
// If user changes something in UI → component updates automatically

// 🔹 Syntax
// [(ngModel)]="variable"         //👉 This is called banana in a box 🍌📦 syntax(because of [( )])

export class AppComponent {
  username = "";
}

//<input [(ngModel)]="username">
//<p>Hello {{ username }}</p>


// 🔹 Behind the Scenes

// Two-way binding =
// ✔ Property Binding + Event Binding

// [property] + (event)



// 🔹 Important Requirement

// To use ngModel, you must import:
import { FormsModule } from '@angular/forms';


// 🔹 One-Line Interview Answer

// 👉 Two-way data binding in Angular is a technique that synchronizes data between the component and the view in both directions using [(ngModel)].