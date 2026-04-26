// @ViewChild is used to access elements/components inside the same component’s template and @ContentChild is used to access content coming from parent via <ng-content>


// ✅ 1. Template Reference Variable (parent → child)

// 👉 @ViewChild

// @ViewChild is used to access elements/components inside the same component (own template).

// <!-- child template -->
// <p #myEl>Hello</p>

// <!-- child ts file -->
// @ViewChild('myEl') el!: ElementRef;


// Works because element is inside same template



// 👉 @ContentChild

// @ContentChild is used to access content passed from parent via <ng-content>.

// <!-- parent -->
// <app-child>
//   <p #projected>Hello</p>
// </app-child>

// <!-- child template-->
// <ng-content></ng-content>

// <!-- child ts file -->
// @ContentChild('projected') content!: ElementRef;



// 🔥 Core Difference (VERY IMPORTANT)

// | Case                                  | Use             |
// | ------------------------------------- | --------------- |
// | Inside same template                  | `@ViewChild`    |
// | Coming from parent via `<ng-content>` | `@ContentChild` |






// ✅ 2. Access Component (parent ↔ child)

// 👉 Parent accessing Child Component

// @ViewChild is used to access child component instance

// <!-- parent -->
// <app-child></app-child>
// @ViewChild(ChildComponent) child!: ChildComponent;

// 👉 Parent can call:

// this.child.someMethod();




// 🧠 Final One-Line Summary (your style)
// @ViewChild is a way to access elements/components from your own template.
// @ContentChild is a way to access content projected from parent using <ng-content>.
