// 🔹 What is ngStyle Directive in Angular?

// ngStyle is an attribute directive used to apply inline CSS styles dynamically to an HTML element.


// 🔹 General Formula for ngStyle (Object Syntax)
// [element [ngStyle]="{ 'cssProperty': condition }"]


// 🔹 Basic Example

// export class AppComponent {
//   isActive = true;
// }


// <p [ngStyle]="{ color: isActive ? 'green' : 'red' }">
//   Status Text
// </p>

// <p [ngStyle]="{
//   color: isActive ? 'green' : 'red',
//   fontSize: '20px',
//   backgroundColor: 'lightgray'
// }">
//   Styled Text
// </p>

// <p [ngStyle]="{ fontSize: size + 'px' }">
//   Dynamic Font Size
// </p>