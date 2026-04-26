// 👉 One-Line Interview Answer:
// Angular Schematics are "templates with logic used by Angular CLI" to automatically generate and modify code in a project.


// 🔥 What are Angular Schematics?

// 👉 In simple words:
// Schematics = code generators + auto setup tools

// 👉 They help Angular CLI to:

// Create files
// Update files
// Configure project automatically



// 🔹 Example

// ng generate component user

// 👉 What happens?

// ✔ Creates component files
// ✔ Updates module
// ✔ Adds selector

// 👉 This is done using Schematics



// 🔹 Another Example

// ng add @angular/material

// 👉 Behind the scenes:

// ✔ Installs package
// ✔ Updates angular.json
// ✔ Adds styles
// ✔ Configures theme

// 👉 All done using Schematics 🔥


// 🔹 What Schematics can do?
// Create components/modules/services
// Modify existing files
// Add dependencies
// Update configs