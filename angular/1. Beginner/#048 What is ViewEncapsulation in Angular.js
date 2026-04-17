// 🔹 What is ViewEncapsulation in Angular?

// 👉 ViewEncapsulation in Angular is a feature that controls how component styles are scoped and applied to the DOM.


// 🔹 Why It Is Used
// Prevent CSS conflicts
// Keep styles isolated per component
// Control style behavior globally or locally




// 🔹 Types of ViewEncapsulation

// 1. Emulated (Default ✅)
// Styles are scoped to component
// Uses unique attributes internally

// 2. None
// Styles are global
// Affect entire application

// 3. ShadowDom
// Uses real browser Shadow DOM
// Complete style isolation



// 🔹 Example

// import { Component, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `<p>Hello</p>`,
//   styles: [`p { color: red; }`],
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class DemoComponent {}