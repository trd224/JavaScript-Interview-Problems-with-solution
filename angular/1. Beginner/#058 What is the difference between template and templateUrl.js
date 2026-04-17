// 🔹 Difference between template and templateUrl

// 👉 template is used to define inline HTML inside the component, while templateUrl is used to link an external HTML file.



// 🔹 Example

// Using template

// @Component({
//   selector: 'app-demo',
//   template: `<h1>Hello World</h1>`
// })
// export class DemoComponent {}

// Using templateUrl

// @Component({
//   selector: 'app-demo',
//   templateUrl: './demo.component.html'
// })
// export class DemoComponent {}