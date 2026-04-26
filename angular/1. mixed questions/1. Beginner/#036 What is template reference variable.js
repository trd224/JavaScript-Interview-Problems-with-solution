// 🔹 One-Line Interview Answer

// 👉 A template reference variable is a variable defined in the template using # that allows access to DOM elements, directives, or components.



// 🔹 Example

// <input #username type="text">
// <button (click)="showValue(username.value)">Show</button>

// showValue(value: string) {
//   console.log(value);
// }



// 🔹 With Forms Example

// <form #myForm="ngForm">
//   <input name="email" ngModel>
// </form>

// <p>{{ myForm.value | json }}</p>