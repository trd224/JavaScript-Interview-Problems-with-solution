// 🔹 What is Content Projection (ng-content) in Angular?

// 👉 Content Projection is a technique in Angular that allows you to pass and display external content inside a component using <ng-content>.

// 👉 Content Projection allows a parent component to pass HTML content into a child component using <ng-content>.


// 🔸 1. Child Component (Receiver)

// 👉 This component decides where content will be shown

// <div class="card">
//   <h2>Card Title</h2>
  
//   <!-- Content will come here -->
//   <ng-content></ng-content>
// </div>



// 🔸 2. Parent Component (Sender)

// 👉 This component sends content

// <app-card>
//   <p>This is passed from parent</p>
// </app-card>


// 🔹 Final Output //inside child Component

// <div class="card">
//   <h2>Card Title</h2>
//   <p>This is passed from parent</p>
// </div>


// 🔹 🔥 Key Understanding
// Parent writes content inside <app-card>
// Child uses <ng-content> as placeholder
// Angular injects parent content into child



// 🔹 Multiple Content (Advanced 🔥)

// Child

// <div>
//   <ng-content select=".header"></ng-content>
//   <ng-content select=".body"></ng-content>
// </div>

// Parent

// <app-card>
//   <h1 class="header">Title</h1>
//   <p class="body">Content</p>
// </app-card>

// 🔹 Output

// <div>
//   <h1>Title</h1>
//   <p>Content</p>
// </div>
