// 👉 One-Line Interview Answer:
// ngAfterViewInit runs after a component’s own view is initialized, while ngAfterContentInit runs after projected content from the parent is initialized.


// 🔥 Main Difference

// 👉 In simple words:

// ngAfterViewInit → component’s own template
// ngAfterContentInit → content from parent (ng-content)




// 🔹 ngAfterViewInit

// 👉 Works with:

// @ViewChild
// Component’s own HTML

// Example

// @ViewChild('myInput') input!: ElementRef;

// ngAfterViewInit() {
//   console.log(this.input); // available here
// }

// ✔ Access your own template elements



// 🔹 ngAfterContentInit

// 👉 Works with:

// @ContentChild
// Projected content

// Example

// Parent

// <app-child>
//   <p #text>Hello</p>
// </app-child>

// Child

// @ContentChild('text') content!: ElementRef;

// ngAfterContentInit() {
//   console.log(this.content); // available here
// }



// | Feature    | ngAfterViewInit  | ngAfterContentInit |
// | ---------- | ---------------- | ------------------ |
// | Works on   | Own template     | Projected content  |
// | Related to | @ViewChild       | @ContentChild      |
// | Runs when  | View ready       | Content projected  |
// | Source     | Inside component | From parent        |


// 🔥 Execution Order
// ngAfterContentInit → ngAfterViewInit