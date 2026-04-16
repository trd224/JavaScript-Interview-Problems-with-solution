// 🔹 What is ngClass Directive in Angular?

// ngClass is an attribute directive used to dynamically add or remove CSS classes from an HTML element.



// 🔹 General Formula for ngClass (Object Syntax)
// [element [ngClass]="{ 'className': condition }"]


// 🔹 Basic Example

// export class AppComponent {
//   isActive = true;
// }



//(String Syntax)

{/* <p [ngClass]="isActive ? 'active' : 'inactive'">
  Status Text
</p> */}

// or (Object Syntax)

// <p [ngClass]="{ 'active': isActive, 'inactive': !isActive }">
//   Status Text
// </p>




// 🔹 Multiple Classes (Object Syntax)

// <p [ngClass]="{active: isActive,highlight: isHighlighted}">
//   Text
// </p>



// 🔹 Array Syntax

//  <p [ngClass]="['class1', 'class2']">
//   Text
// </p> 